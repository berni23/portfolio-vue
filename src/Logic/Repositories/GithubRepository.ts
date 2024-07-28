

const owner = "berni23"
const { Octokit } = require("@octokit/rest");

async function  createOctokit(){
    const client =  new Octokit({
       
     })
    return await client

}

export async function getDataFromRepo(repo:string): Promise<Response>{

        const  token = process.env.VUE_APP_GITHUB_TOKEN
        return  (await createOctokit()).request("GET /repos/" +owner+"/"+ repo,{
        owner,
        repo,
        headers:{ authorization : `token ${token}`}
        });
}


