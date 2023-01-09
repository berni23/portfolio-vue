
import RepoItem from "../../CustomTypes/RepoItem";
import { getDataFromRepo } from "../Repositories/GithubRepository";


 async function fetchProjectRepoItems(data:Array<any>): Promise<any>  {
    const promises = []  as Array<Promise<void|RepoItem>>
      data.forEach((item)=>{
       promises.push(getDataFromRepo(item.name).then((response)=> buildProjectRepoFromDataAndResponse(item,response)))
      }
    )
    return  await Promise.allSettled(promises)

}
export default  function getProjectRepoItems(data:Array<any>)  {
       return fetchProjectRepoItems(data)
}


function buildProjectRepoFromDataAndResponse(data:any ,responseData:any):RepoItem {


    responseData = responseData.data;
    const item = {} as RepoItem
    item.name= data.name,
    item.description = responseData.description
    item.id = responseData.id
    item.tags = responseData.topics,
    item.stargazersCount = responseData.stargazers_count,
    item.forksCount = responseData.forks_count,
    item.urlRepo = responseData.html_url 
    item.urlImage = data.urlImage?data.urlImage:null;
    item.link = (data.link)?data.link:null;
    item.visible =  responseData.visibility == "public" ? true : false;
    return item 

}