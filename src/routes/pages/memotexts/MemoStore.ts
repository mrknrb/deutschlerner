import { writable } from 'svelte/store';
import { supabase } from '../../../lib/supabaseClient';
import { Memo } from './Memo';

export type MemoStoreType = {
	memok?: Memo[];
};

let MemoStoreDefault: MemoStoreType = {
	memok: []
};

export let MemoStore = writable(MemoStoreDefault, () => {
	return;
});

export let MemoStoreValue: MemoStoreType;
MemoStore.subscribe((value) => {
	MemoStoreValue = value;
});

let refreshMemos = async () => {
	//  const { data, error } = await supabase.from('szavak').select().    limit(100)

	let { data, error } = await supabase.rpc('memoquery', {});

	console.log(data);
	console.log(error);

	if (!data) return;

	MemoStore.update((value) => {
		value.memok = data;

		return value;
	});
};

export let MemoStoreCommands = {
	refreshMemos
};
