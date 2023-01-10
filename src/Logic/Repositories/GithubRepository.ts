

const owner = "berni23"

function  createOctokit(){
    const { Octokit } = require("@octokit/rest");
     const client =  new Octokit({
        auth: process.env.VUE_APP_GITHUB_TOKEN,
        })

        return client

}

export async function getDataFromRepo(repo:string): Promise<Response>{

        return  await createOctokit().request("GET /repos/" +owner+"/"+ repo,{
        owner,
        repo,
        headers:{

authorization : `token ${process.env.VUE_APP_GITHUB_TOKEN}`
        }
        });

}


