import RepoItem from "../../CustomTypes/RepoItem";
import {useProjectsStore} from "../../stores/projects";
import {getDataFromRepo} from "../Repositories/GithubRepository";


async function fetchProjectRepoItems(data:Array<any>): Promise<any>  {
    const promises = []  as Array<Promise<void|RepoItem>>
      data.forEach((item)=>{
       promises.push(getDataFromRepo(item.name).then((response)=> buildProjectRepoFromDataAndResponse(item,response)))
      }
    )
    return  await Promise.allSettled(promises)

}
export default  function getProjectRepoItems(data:Array<any>)  {

      const projectsStore = useProjectsStore()
      if(projectsStore.shouldFetchRepoItems){
       return fetchProjectRepoItems(data).then((resData)=>{
        projectsStore.updateRepoItems(resData)
        return resData
      })
 }
  return projectsStore.repoItems;
}

function buildProjectRepoFromDataAndResponse(data:any ,responseData:any):RepoItem {
    responseData = responseData.data
    const item = {} as RepoItem
    item.name= data.name
    item.language = languageColor(responseData.language)
    item.description = responseData.description
    item.id = responseData.id
    item.tags = responseData.topics
    item.stargazersCount = responseData.stargazers_count
    item.license = responseData.license
    item.forksCount = responseData.forks_count
    item.urlRepo = responseData.html_url
    item.urlImage = data.urlImage?data.urlImage:null
    item.link = (data.link)?data.link:null
    item.visible =  responseData.visibility == "public" ? true : false
    return item
}

const arrayLanguage = {

   vue: "#41b883",
   javascript: "#f1e05a",
   php : "#4F5D95",
   kotlin: "#A97BFF",
   go: "#00ADD8",
   typescript: "#3178c6",
   python: "#3572A5",
   css: "#563d7c",
   json: "#292929",
   html : "#e34c26"



}

export function languageColor(language:string){
  if (!language) return  null

  if (arrayLanguage[language.toLowerCase()]){
    return   {

       name:language,
      color: arrayLanguage[language.toLowerCase()]
    }
  }
  return  {
    name:language,
    color:"red"

  }
}
