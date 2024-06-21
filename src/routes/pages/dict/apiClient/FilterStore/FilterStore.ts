import queryString from 'query-string';
import { writable } from 'svelte/store';
import { MrkLib } from '../../../../../Egyebek/MrkLib';
import { oiu } from '../../../../../Egyebek/oiu';
import { FilterNameEnums } from '../../data/enums/FilterNameEnums';

export type FilterStoreType = {
	floatingFilterMenuVisible?: boolean;
	arg_szo?: string;
	arg_id?: number;
	arg_szoto?: string;
	arg_idszinonimai?: string;
	arg_tanulando?: boolean;
	arg_limit?: number;
	arg_offset?: number;
};
let FilterStoreDefault: FilterStoreType = {
	arg_limit: 50,
	arg_offset: 0
};

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
		let urlvalue = getURL();

		return MrkLib.mergeObjects(value, urlvalue);
	});
};
let offsetUpdate = (offset: number) => {
	FilterStoreCommands.updateURL((old) => {
		//oiu.set(	old,filterName,filterTextValue)
		//let a = oiu.create();
		oiu.set(old, FilterNameEnums.arg_offset, offset);
		return old;
	});
};

export let FilterStoreCommands = {
	updateURL,
	getURL,
	updateFilterFromURL,
	offsetUpdate
};
