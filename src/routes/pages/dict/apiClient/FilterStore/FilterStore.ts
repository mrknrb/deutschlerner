import { writable } from 'svelte/store';
import * as queryString from "querystring";

export type FilterStoreType = {
arg_szo?:string
    arg_id?:number
    arg_szoto?:string
};

let FilterStoreDefault: FilterStoreType = {

  arg_szo:"arbeit"
};

export let FilterStoreValue: FilterStoreType;
export let FilterStore = writable(FilterStoreDefault, () => {

    return;
});

FilterStore.subscribe((value) => {
    FilterStoreValue = value;
});

let updateURL = (urlType: FilterStoreType) => {
    location.search = queryString.stringify(urlType);
};
let getURL = () => {
    return queryString.parse(location.search) as FilterStoreType;
};


export let FilterStoreCommands = {
    updateURL,
    getURL
};
