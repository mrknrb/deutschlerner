import { writable } from 'svelte/store';
import * as queryString from 'querystring';
import { Word } from '../../data/types/Word';
import { supabase } from '../../../../../lib/supabaseClient';
import { FilterStoreCommands, FilterStoreValue } from '../FilterStore/FilterStore';

export type WordsStoreType = {
	szavak?: Word[];
	szoId?: string;
	selectedWord?: Word;
};

let WordsStoreDefault: WordsStoreType = {
	szavak: [],
	selectedWord: undefined
};

export let WordsStore = writable(WordsStoreDefault, () => {
	return;
});

export let WordsStoreValue: WordsStoreType;
WordsStore.subscribe((value) => {
	WordsStoreValue = value;
	console.log(WordsStoreValue);
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
let selectWord = (word: Word) => {
	WordsStore.update((value) => {
		value.selectedWord = word;

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
let newGptMemo = async (word: Word) => {
	const response = await fetch('/api/newgptmemo', {
		method: 'POST',
		body: JSON.stringify(word),
		headers: {
			'content-type': 'application/json'
		}
	});

	await WordsStoreCommands.newMemo(word, await response.json());
};
let newMemo = async (word: Word, memo: string) => {
	await supabase.rpc('memotextadd', {
		arg_wordrowid: word.id,
		arg_text: memo
	});
	setTimeout(async (args) => {
		await WordsStoreCommands.refreshOneWord(word.id);
	}, 2000);
};

export let WordsStoreCommands = {
	newMemo,
	refreshWords,
	refreshWordsFromURL,
	refreshOneWord,
	newGptMemo,
	selectWord
};
