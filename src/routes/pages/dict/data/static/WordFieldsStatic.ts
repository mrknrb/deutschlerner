import { FieldTypes } from '../enums/fieldTypes';
import { fieldBasic } from '../types/fieldBasic';
import { WordFields } from '../enums/WordFields';
import { FilterStoreCommands, FilterStoreType } from '../../apiClient/FilterStore/FilterStore';
import { supabase } from '../../../../../lib/supabaseClient';
import { WordsStore, WordsStoreCommands } from '../../apiClient/WordsStore/WordsStore';
import { tudasszintNovelo } from '../../apiClient/WordsStore/DictFunctions';
import { WordSzintek } from '../enums/WordSzintek';
import { WordNevelok } from '../enums/WordNevelok';

export const WordFieldsStatic: fieldBasic[] = [
	{
		name: WordFields.szint,
		type: FieldTypes.string,
		size: 2,
		szin: (word) => {
			console.log(typeof word.szint);
			switch (word.szint) {
				case WordSzintek.a1:
					return 'bg-blue-500';
					break;
				case WordSzintek.c2:
					return 'bg-red-500';
					break;
				default:
					return 'bg-gray-500';
			}
		}
	},

	{ name: WordFields.tudasszint, type: FieldTypes.string, size: 2 },
	{
		name: WordFields.szo,
		szin: (word) => {
			switch (word.nevelo) {
				case WordNevelok.der:
					return 'bg-gray-500';
					break;
				case WordNevelok.die:
					return 'bg-red-500';
					break;
				case WordNevelok.das:
					return 'bg-yellow-500';
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
	{ name: WordFields.jelentes, type: FieldTypes.list, size: 15 },
	{ name: WordFields.angol, type: FieldTypes.list },
	{ name: WordFields.magyar, type: FieldTypes.list },
	{
		name: WordFields.szinonima,
		type: FieldTypes.list,
		clickAction: (data) => {
			FilterStoreCommands.updateURL((regi) => {
				let uj: FilterStoreType = {};
				uj.arg_idszinonimai = data.id;
				return uj;
			});
		}
	},
	{ name: WordFields.antonima, type: FieldTypes.list },
	{ name: WordFields.sentences, type: FieldTypes.list },
	{ name: WordFields.objects, type: FieldTypes.list },

	{ name: WordFields.prepoziciok, type: FieldTypes.list },

	{ name: WordFields.modal, type: FieldTypes.list },
	{ name: WordFields.attributes, type: FieldTypes.list },
	{ name: WordFields.nevelo, type: FieldTypes.string },
	{ name: WordFields.szofaj, type: FieldTypes.string, size: 5 },
	{ name: WordFields.igekoto, type: FieldTypes.string },
	{ name: WordFields.id, type: FieldTypes.string },

	{ name: WordFields.szoto, type: FieldTypes.string },
	{ name: WordFields.prateritum, type: FieldTypes.string },
	{ name: WordFields.perfect, type: FieldTypes.string },
	{ name: WordFields.felteteles, type: FieldTypes.string }
];
