import { writable } from 'svelte/store';
import * as queryString from "querystring";
import {Word} from "../../data/types/Word";
import {supabase} from "../../../../../lib/supabaseClient";
import {FilterStoreCommands, FilterStoreValue} from "../FilterStore/FilterStore";

export type WordsStoreType = {
    szavak?:Word[]
    szoId?:string
};

let WordsStoreDefault: WordsStoreType = {
    szavak:[]
};

export let WordsStore = writable(WordsStoreDefault, () => {

    return;
});

export let WordsStoreValue: WordsStoreType;
WordsStore.subscribe((value) => {
    WordsStoreValue = value;
});

let refreshWords =async () => {
  //  const { data, error } = await supabase.from('szavak').select().    limit(100)
    console.log(FilterStoreValue)
   let { data, error } = await supabase.rpc('szoquery', FilterStoreValue);



    console.log(data)
    console.log(error)

if(!data)return

    WordsStore.update((value)=>{

        value.szavak=data

        return value
    })

};

let refreshWordsFromURL =async () => {
   FilterStoreCommands. updateFilterFromURL()

    refreshWords()

};

export let WordsStoreCommands = {
    refreshWords,refreshWordsFromURL
};
