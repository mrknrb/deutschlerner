import queryString from 'query-string';
import { writable } from 'svelte/store';
import { MrkLib } from '../../../../../Egyebek/MrkLib';
import { oiu } from '../../../../../Egyebek/oiu';
import { supabase } from '../../../../../lib/supabaseClient';
import { WordGroupSaveType } from './wordGroupSaveType';

export type WordGroupStoreType = {
	wordGroupFloatingMenuVisible: boolean;
	wordGroups: WordGroupSaveType[];
};
let WordGroupStoreDefault: WordGroupStoreType = {
	wordGroupFloatingMenuVisible: false,
	wordGroups: []
};

export let WordGroupStoreValue: WordGroupStoreType;
export let WordGroupStore = writable(WordGroupStoreDefault, () => {
	return;
});

WordGroupStore.subscribe((value) => {
	WordGroupStoreValue = value;
});

let updateURL = (urlTypeCallback: (old: WordGroupStoreType) => WordGroupStoreType) => {
	let url = urlTypeCallback(getURL());
	MrkLib.forEachInObject(url, (object, key) => {
		if (!object) {
			delete url[key];
		}
	});
	location.search = queryString.stringify(url);
};
let getURL = () => {
	return queryString.parse(location.search) as WordGroupStoreType;
};
let updateWordGroupFromURL = () => {
	WordGroupStore.update((value) => {
		let urlvalue = getURL();

		return MrkLib.mergeObjects(value, urlvalue);
	});
};
let getWordGroups = async () => {
	let { data, error } = await supabase.rpc('wordgroupquery');
	console.log(data);
	console.log(error);
	if (data) {
		WordGroupStore.update((value) => {
			value.wordGroups = data;

			return value;
		});
	}
};
export let WordGroupStoreCommands = {
	updateURL,
	getURL,
	updateWordGroupFromURL,
	getWordGroups
};
