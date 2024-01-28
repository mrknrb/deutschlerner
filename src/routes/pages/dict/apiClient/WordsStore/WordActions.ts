import { tudasszintNovelo } from './DictFunctions';
import { WordsStore, WordsStoreCommands } from './WordsStore';
import { supabase } from '../../../../../lib/supabaseClient';
import { FilterStoreType } from '../FilterStore/FilterStore';
import queryString from 'query-string';
import { WordsSpeakFunc } from './WordsSpeakFunc';

export let WordActions = [
	{
		name: 'tudasszintNoveles',
		func: async (data) => {
			let tudasszint = tudasszintNovelo(data.tudasszint);
			WordsStore.update((value) => {
				let szoIndex = value.szavak?.findIndex((value1, index) => {
					return value1.id === data.id;
				});
				if (szoIndex != undefined && szoIndex !== -1 && value.szavak) {
					value.szavak[szoIndex].tudasszint = tudasszint;
				}

				return value;
			});
			await supabase.rpc('tudasszintset', {
				arg_id: data.id,
				arg_tudasszint: tudasszint
			});
			setTimeout(async (args) => {
				await WordsStoreCommands.refreshOneWord(data.id);
			}, 2000);
		}
	},
	{
		name: 'ismetelve',
		func: async (data) => {
			await supabase.rpc('ismetlesdatumnow', {
				arg_id: data.id
			});
			setTimeout(async (args) => {
				await WordsStoreCommands.refreshOneWord(data.id);
			}, 2000);
		}
	},
	{
		name: 'szinonimaTudasszint',
		func: async (data) => {
			if (confirm('Are you sure?') == true) {
				let szinonimatudasszint = tudasszintNovelo(data.szinonimatudasszint);
				WordsStore.update((value) => {
					let szoIndex = value.szavak?.findIndex((value1, index) => {
						return value1.id === data.id;
					});
					if (szoIndex != undefined && szoIndex !== -1 && value.szavak) {
						value.szavak[szoIndex].szinonimatudasszint = szinonimatudasszint;
					}

					return value;
				});
				await supabase.rpc('szinonimatudasszintset', {
					arg_id: data.id,
					arg_szinonimatudasszint: szinonimatudasszint
				});
				setTimeout(async (args) => {
					await WordsStoreCommands.refreshOneWord(data.id);
				}, 2000);
			}
		}
	},
	{
		name: 'linguee',
		func: (data) => {
			window.open(
				'https://www.linguee.com/english-german/search?source=german&query=' + data.szo,
				'_blank'
			);
		}
	},
	{
		name: 'szinonimakOldala',
		func: (data) => {
			let filter: FilterStoreType = { arg_idszinonimai: data.id };

			window.open('dict?' + queryString.stringify(filter), '_blank');
		}
	},
	{
		name: 'peldakFelolvas',
		func: (data) => {
			WordsSpeakFunc([data]);
		}
	},
	{
		name: 'szotovekoldala',
		func: (data) => {
			let filter: FilterStoreType = { arg_szoto: data.szoto };

			window.open('dict?' + queryString.stringify(filter), '_blank');
		}
	},
	{
		name: 'newGPTMese',
		func: async (data) => {
			if (confirm('Are you sure?') == true) {
				await WordsStoreCommands.newGptMemo(data);
			}
		}
	}
];
