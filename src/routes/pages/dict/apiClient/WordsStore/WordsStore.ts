import { writable } from 'svelte/store';
import * as queryString from 'querystring';
import { Word } from '../../data/types/Word';
import { supabase } from '../../../../../lib/supabaseClient';
import { FilterStoreCommands, FilterStoreValue } from '../FilterStore/FilterStore';

export type WordsStoreType = {
	szavak?: Word[];
	szoId?: string;
};

let WordsStoreDefault: WordsStoreType = {
	szavak: []
};

export let WordsStore = writable(WordsStoreDefault, () => {
	return;
});

export let WordsStoreValue: WordsStoreType;
WordsStore.subscribe((value) => {
	WordsStoreValue = value;
});

let refreshWords = async () => {
	//  const { data, error } = await supabase.from('szavak').select().    limit(100)
	console.log(FilterStoreValue);
	let { data, error } = await supabase.rpc('szoquery', FilterStoreValue);

	console.log(data);
	console.log(error);

	if (!data) return;

	WordsStore.update((value) => {
		value.szavak = data;

		return value;
	});
};

let refreshOneWord = async (id: string) => {
	//  const { data, error } = await supabase.from('szavak').select().    limit(100)
	console.log(FilterStoreValue);
	let { data, error } = await supabase.rpc('szoquery', { arg_id: id });

	console.log(data);
	console.log(error);

	if (!data) return;
	let dataszo = data[0];

	WordsStore.update((value) => {
		let szoIndex = value.szavak?.findIndex((value1, index) => {
			return value1.id === id;
		});
		if (szoIndex != undefined && szoIndex !== -1 && value.szavak && dataszo) {
			value.szavak[szoIndex] = dataszo;
		}
		//value.szavak[szoIndex] = data[0];
		console.log(value);
		return value;
	});
};
let refreshWordsFromURL = async () => {
	FilterStoreCommands.updateFilterFromURL();

	refreshWords();
};

export let WordsStoreCommands = {
	refreshWords,
	refreshWordsFromURL,
	refreshOneWord
};
