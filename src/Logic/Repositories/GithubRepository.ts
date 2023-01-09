



const owner = "berni23"

function  createOctokit(){
    const { Octokit } = require("@octokit/rest");
     return new Octokit({
        auth: process.env.VUE_APP_GITHUB_TOKEN,
        })

}

export async function getDataFromRepo(repo:string): Promise<Response>{
    
        return  await createOctokit().request("GET /repos/" +owner+"/"+ repo,{
        owner,
        repo,
        });

}
