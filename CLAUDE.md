# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Bernat Ferrer. Single-page Vue 3 app displaying a career timeline, a list of published articles, GitHub project cards, and a contact section. Dark theme with space/NASA aesthetic.

## Commands

- **Dev server:** `yarn run serve` (runs on localhost:8080 via vue-cli-service)
- **Build:** `yarn run build`
- **Install deps:** `yarn install`

There are no test or lint scripts configured.

## Architecture

- **Framework:** Vue 3 + TypeScript, built with vue-cli-service (Vite config exists but CLI service is the active build tool)
- **UI library:** Quasar with Material Icons and Bootstrap Icons
- **State:** Pinia store (`src/stores/projects.ts`) with persisted state plugin — caches GitHub repo data for 12 hours
- **Routing:** Vue Router with a single route (`/` → `HomeView`), uses hash-based smooth scrolling to sections
- **Styling:** SCSS, scoped and global styles in SFCs

### Key Data Flow

1. `HomeView` is the only view — it composes all sections in order: Background, Navbar, Icons, Timeline, Articles, Projects, Contact
2. Static content lives in `src/data/` and is imported directly by its section component — `timeline.ts` (career history), `articles.ts` (published articles, typed by `src/CustomTypes/Article.ts`), and `repoItems.ts` (which repos to fetch)
3. Project cards are the only live data: they fetch repo info from GitHub via Octokit (`src/Logic/Repositories/GithubRepository.ts`) using a `VUE_APP_GITHUB_TOKEN` env var (see `.env.example`), and the result is cached in the Pinia store
4. Sections share `components/common/SectionTitle.vue` for their heading; the CV is rendered with `vue-pdf-embed` from `public/CV_Bernat.pdf`

### Responsive Design

Desktop and mobile have separate timeline components (`Timeline.vue` vs `TimelineResp.vue`), switched via `src/Logic/Utils/isMobile.ts`.

### Directory Layout

- `src/components/` — organized by section: `Timeline/`, `Projects/`, `Contact/`, `common/`
- `src/Logic/` — business logic: `Repositories/` (GitHub API), `Get/` (data fetching), `Utils/`
- `src/data/` — static content (timeline entries, repo list)
- `src/CustomTypes/` — TypeScript interfaces
