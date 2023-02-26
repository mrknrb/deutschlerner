import queryString from 'query-string';
import { writable } from 'svelte/store';
import { MrkLib } from '../../../../../Egyebek/MrkLib';

export type FilterStoreType = {
	arg_szo?: string;
	arg_id?: number;
	arg_szoto?: string;
	arg_idszinonimai?: string;
	arg_tanulando?: boolean;
};

let FilterStoreDefault: FilterStoreType = {};

export let FilterStoreValue: FilterStoreType;
export let FilterStore = writable(FilterStoreDefault, () => {
	return;
});

FilterStore.subscribe((value) => {
	FilterStoreValue = value;
});

let updateURL = (urlTypeCallback: (old: FilterStoreType) => FilterStoreType) => {
	let url = urlTypeCallback(getURL());
	MrkLib.forEachInObject(url, (object, key) => {
		if (!object) {
			delete url[key];
		}
	});
	location.search = queryString.stringify(url);
};
let getURL = () => {
	return queryString.parse(location.search) as FilterStoreType;
};
let updateFilterFromURL = () => {
	FilterStore.update((value) => {
		value = getURL();
		return value;
	});
};

export let FilterStoreCommands = {
	updateURL,
	getURL,
	updateFilterFromURL
};
