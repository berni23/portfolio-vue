import { Octokit } from "@octokit/rest";

const owner = "berni23"

function createOctokit() {
    const token = process.env.VUE_APP_GITHUB_TOKEN
    // Only authenticate when a token is actually present. Passing `auth: undefined`
    // (e.g. when the env var didn't load) makes Octokit send `token undefined`,
    // which GitHub rejects with 401 even for public repos.
    return new Octokit(token ? { auth: token } : {})
}

export async function getDataFromRepo(repo: string) {
    return createOctokit().request("GET /repos/{owner}/{repo}", { owner, repo });
}
