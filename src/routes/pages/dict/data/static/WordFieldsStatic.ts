import { FieldTypes } from '../enums/fieldTypes';
import { fieldBasic } from '../types/fieldBasic';
import { WordFields } from '../enums/WordFields';
import {
	FilterStoreCommands,
	FilterStoreType,
	FilterStoreValue
} from '../../apiClient/FilterStore/FilterStore';
import { supabase } from '../../../../../lib/supabaseClient';
import { WordsStore, WordsStoreCommands } from '../../apiClient/WordsStore/WordsStore';
import { tudasszintNovelo } from '../../apiClient/WordsStore/DictFunctions';
import { WordSzintek } from '../enums/WordSzintek';
import { WordNevelok } from '../enums/WordNevelok';
import queryString from 'query-string';
import { WordsSpeakFunc } from '../../apiClient/WordsStore/WordsSpeakFunc';

export const WordFieldsStatic: fieldBasic[] = [
	{
		name: WordFields.szint,
		type: FieldTypes.string,
		size: 2,
		szin: (word) => {
			//console.log(typeof word.szint);
			switch (word.szint) {
				case WordSzintek.a1:
					return 'bg-green-300';
					break;
				case WordSzintek.a2:
					return 'bg-green-300';
					break;
				case WordSzintek.b1:
					return 'bg-blue-300';
					break;
				case WordSzintek.b2:
					return 'bg-blue-300';
					break;
				case WordSzintek.c1:
					return 'bg-pink-300';
					break;
				case WordSzintek.c2:
					return 'bg-pink-300';
					break;
				default:
					return 'bg-gray-500';
			}
		},
		clickAction: async (data) => {
			if (confirm('Are you sure?') == true) {
				await WordsStoreCommands.newGptMemo(data);
			}
		}
	},
	{ name: WordFields.tudasszint, type: FieldTypes.string, size: 2 },
	{ name: WordFields.szinonimatudasszint, type: FieldTypes.string, size: 2 },
	{
		name: WordFields.szo,
		size: 7,
		szin: (word) => {
			switch (word.nevelo) {
				case WordNevelok.der:
					return 'bg-gray-400';
					break;
				case WordNevelok.die:
					return 'bg-red-300';
					break;
				case WordNevelok.das:
					return 'bg-yellow-300';
					break;
				default:
					return '';
			}
		},
		type: FieldTypes.string,
		clickAction: async (data) => {
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
		name: WordFields.magyar,
		type: FieldTypes.list,
		size: 7,
		clickAction: async (data) => {
			await supabase.rpc('ismetlesdatumnow', {
				arg_id: data.id
			});
			setTimeout(async (args) => {
				await WordsStoreCommands.refreshOneWord(data.id);
			}, 2000);
		}
	},
	{
		name: WordFields.angol,
		size: 7,
		type: FieldTypes.list,
		clickAction: async (data) => {
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
		name: WordFields.jelentes,
		type: FieldTypes.list,
		size: 15,
		clickAction: (data) => {
			window.open(
				'https://www.linguee.com/english-german/search?source=german&query=' + data.szo,
				'_blank'
			);
		}
	},
	{
		name: WordFields.szinonima,
		type: FieldTypes.list,
		clickAction: (data) => {
			let filter: FilterStoreType = { arg_idszinonimai: data.id };

			window.open('dict?' + queryString.stringify(filter), '_blank');
		}
	},
	{
		name: WordFields.antonima,
		type: FieldTypes.list,
		clickAction: (data) => {
			WordsSpeakFunc([data]);
		}
	},

	{
		name: WordFields.kozosszoto,
		type: FieldTypes.list,
		size: 40,
		clickAction: (data) => {
			let filter: FilterStoreType = { arg_szoto: data.szoto };

			window.open('dict?' + queryString.stringify(filter), '_blank');
		}
	},

	{ name: WordFields.memotext, type: FieldTypes.textplayer, size: 10 },
	{ name: WordFields.sentences, type: FieldTypes.list, size: 50 },
	{ name: WordFields.ismetlesdatum, type: FieldTypes.string },
	{ name: WordFields.objects, type: FieldTypes.list, size: 30 },
	{ name: WordFields.prepoziciok, type: FieldTypes.list, size: 30 },
	{ name: WordFields.modal, type: FieldTypes.list, size: 30 },
	{ name: WordFields.attributes, type: FieldTypes.list, size: 30 },
	{ name: WordFields.nevelo, type: FieldTypes.string },

	{ name: WordFields.szofaj, type: FieldTypes.string, size: 5 },
	{ name: WordFields.igekoto, type: FieldTypes.string },
	{ name: WordFields.id, type: FieldTypes.string },
	{ name: WordFields.szoto, type: FieldTypes.string },
	{ name: WordFields.prateritum, type: FieldTypes.string },
	{ name: WordFields.perfect, type: FieldTypes.string },
	{ name: WordFields.felteteles, type: FieldTypes.string }
];
