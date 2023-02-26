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

export const WordFieldsStatic: fieldBasic[] = [
	{
		name: WordFields.szint,
		type: FieldTypes.string,
		size: 2,
		szinek: [{ fieldValue: '22', szin: 'bg-green-500' }]
	},

	{ name: WordFields.tudasszint, type: FieldTypes.string, size: 2 },
	{
		name: WordFields.szo,
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
	{ name: WordFields.nevelo, type: FieldTypes.string },
	{ name: WordFields.szofaj, type: FieldTypes.string, size: 5 },
	{ name: WordFields.igekoto, type: FieldTypes.string },
	{ name: WordFields.id, type: FieldTypes.string },

	{ name: WordFields.szoto, type: FieldTypes.string },
	{ name: WordFields.prateritum, type: FieldTypes.string },
	{ name: WordFields.perfect, type: FieldTypes.string },
	{ name: WordFields.felteteles, type: FieldTypes.string }
];
