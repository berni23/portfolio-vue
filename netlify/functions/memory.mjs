// Tiny memory store for the Vapi voice-agent demo.
//
// GET    /api/memory  -> everything remembered, as plain text for the agent
// POST   /api/memory  -> append one note   {kind?, summary, when?, who?}
// DELETE /api/memory  -> forget everything
//
// Storage is Netlify Blobs: no database, no setup. Auth is a single shared
// secret in the MEMORY_SECRET env var, sent as the x-api-key header.
import { getStore } from '@netlify/blobs';

const KEY = 'notes';
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });

export default async (req) => {
  const secret = Netlify.env.get('MEMORY_SECRET');
  if (!secret) return json({ error: 'MEMORY_SECRET is not configured' }, 500);
  if (req.headers.get('x-api-key') !== secret) return json({ error: 'unauthorized' }, 401);

  const store = getStore('vapi-memory');
  // Blobs reads are eventually consistent by default, so a note saved during a
  // call would not be visible on the next read. It also matters for POST, which
  // reads-then-appends: a stale read silently drops notes.
  const notes = (await store.get(KEY, { type: 'json', consistency: 'strong' })) || [];

  if (req.method === 'GET') {
    if (!notes.length) {
      return json({ count: 0, memory: 'Nothing remembered yet. This is your first conversation.' });
    }
    const memory = notes
      .map((n) => {
        const bits = [n.summary];
        if (n.when) bits.push(`when: ${n.when}`);
        if (n.who) bits.push(`with: ${n.who}`);
        return `- [${n.kind || 'note'}] ${bits.join(' — ')} (noted ${n.savedAt.slice(0, 10)})`;
      })
      .join('\n');
    return json({ count: notes.length, memory });
  }

  if (req.method === 'POST') {
    let body;
    try {
      body = await req.json();
    } catch {
      return json({ error: 'body must be JSON' }, 400);
    }
    const summary = (body.summary || '').trim();
    if (!summary) return json({ error: 'summary is required' }, 400);

    const note = {
      kind: body.kind || 'note',
      summary,
      when: body.when || '',
      who: body.who || '',
      savedAt: new Date().toISOString(),
    };
    // Keep the demo bounded; the agent only needs recent context.
    const next = [...notes, note].slice(-50);
    await store.setJSON(KEY, next);
    return json({ ok: true, saved: note, count: next.length });
  }

  if (req.method === 'DELETE') {
    await store.setJSON(KEY, []);
    return json({ ok: true, count: 0 });
  }

  return json({ error: `method ${req.method} not allowed` }, 405);
};

export const config = { path: '/api/memory' };
