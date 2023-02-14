import { FieldTypes } from '../enums/fieldTypes';
import { fieldBasic } from '../types/fieldBasic';
import { WordFields } from '../enums/WordFields';
import {FilterStoreCommands, FilterStoreType} from '../../apiClient/FilterStore/FilterStore';

export const WordFieldsStatic: fieldBasic[] = [
	{
		name: WordFields.szint,
		type: FieldTypes.string,
		size: 2,
		szinek: [{ fieldValue: '22', szin: 'bg-green-500' }]
	},

	{ name: WordFields.tudasszint, type: FieldTypes.string,size: 2 },
	{ name: WordFields.szofaj, type: FieldTypes.string, size: 5 },
	{ name: WordFields.szo, type: FieldTypes.string },
	{ name: WordFields.jelentes, type: FieldTypes.list, size: 15 },
	{ name: WordFields.angol, type: FieldTypes.list },
	{
		name: WordFields.szinonima,
		type: FieldTypes.list,
		clickAction: (data) => {
			FilterStoreCommands.updateURL((regi) => {
				let uj:FilterStoreType={}
				uj.arg_idszinonimai=data.id;
				return uj
			});
		}
	},
	{ name: WordFields.nevelo, type: FieldTypes.string },
	{ name: WordFields.igekoto, type: FieldTypes.string },
	{ name: WordFields.id, type: FieldTypes.string },

	{ name: WordFields.szoto, type: FieldTypes.string },
	{ name: WordFields.prateritum, type: FieldTypes.string },
	{ name: WordFields.perfect, type: FieldTypes.string },
	{ name: WordFields.felteteles, type: FieldTypes.string }
];
