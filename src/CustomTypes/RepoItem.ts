
export default interface RepoItem {
    name:string,
    link:  Link|null
    description: string,
    license:License|null,
    id:number,
    tags: Array<string>
    stargazersCount:number,
    forksCount:number
    urlRepo:string,
    urlImage:string|null,
    visible: Boolean
}

interface Link{
    link:string,
    name:string
}

interface License {
    name:string,
    url:string
}