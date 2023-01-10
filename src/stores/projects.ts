

import { defineStore } from "pinia"
import RepoItem from "../CustomTypes/RepoItem"

export const useProjectsStore = defineStore('projects',{

    persist:true,
    state:()=> ({
        _cacheTimeMillis: 43200000, //twelve hours
        _repoItemsLastFetched: null as number|null ,
        _arrayRepoItems: [] as Array<RepoItem>

    }),

    actions :{
        updateRepoItems(repoItems:Array<RepoItem>){
            this._repoItemsLastFetched =  Date.now()
            this._arrayRepoItems = repoItems;   
        }
    },

    getters:{
        shouldFetchRepoItems : state=>  !state._repoItemsLastFetched ||(state._cacheTimeMillis + state._repoItemsLastFetched)< Date.now(),
        repoItems:state=> state._arrayRepoItems
    }
})