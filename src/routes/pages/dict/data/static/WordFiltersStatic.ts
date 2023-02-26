import { fieldBasic } from '../types/fieldBasic';
import { WordFields } from '../enums/WordFields';
import { FieldTypes } from '../enums/fieldTypes';
import { FilterStoreCommands, FilterStoreType } from '../../apiClient/FilterStore/FilterStore';
import { FilterStaticType } from '../types/FilterStaticType';
import { FilterNameEnums } from '../enums/FilterNameEnums';
import { FilterTypeEnums } from '../enums/FilterTypeEnums';

export const WordFiltersStatic: FilterStaticType[] = [
	{
		name: FilterNameEnums.arg_szo,
		type: FilterTypeEnums.text
	},
	{
		name: FilterNameEnums.arg_szogyujtes,
		type: FilterTypeEnums.button
	},
	{
		name: FilterNameEnums.arg_tudasszint,
		type: FilterTypeEnums.text
	},
	{
		name: FilterNameEnums.arg_idszinonimai,
		type: FilterTypeEnums.text
	},
	{
		name: FilterNameEnums.arg_szint,
		type: FilterTypeEnums.text
	}
];
