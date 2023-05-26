import { fieldBasic } from '../types/fieldBasic';
import { WordFields } from '../enums/WordFields';
import { FieldTypes } from '../enums/fieldTypes';
import { FilterStoreCommands, FilterStoreType } from '../../apiClient/FilterStore/FilterStore';
import { FilterStaticType } from '../types/FilterStaticType';
import { FilterNameEnums } from '../enums/FilterNameEnums';
import { FilterTypeEnums } from '../enums/FilterTypeEnums';

export const WordFiltersStatic: FilterStaticType[] = [
	{
		name: FilterNameEnums.arg_szogyujtes,
		type: FilterTypeEnums.button
	},
	{
		name: FilterNameEnums.arg_tudasszint,
		type: FilterTypeEnums.dropdown,
		staticData: ['', '0', '1', '2', '3', '4']
	},
	{
		name: FilterNameEnums.arg_szinonimafilter,
		type: FilterTypeEnums.button
	},
	{
		name: FilterNameEnums.arg_szinonimatudasszint,
		type: FilterTypeEnums.dropdown,
		staticData: ['', '0', '1', '2', '3', '4']
	},
	{
		name: FilterNameEnums.arg_szint,
		type: FilterTypeEnums.dropdown,
		staticData: ['', '11', '12', '21', '22', '31', '32']
	},
	{
		name: FilterNameEnums.arg_szo,
		type: FilterTypeEnums.text
	},
	{
		name: FilterNameEnums.arg_szoto,
		type: FilterTypeEnums.text
	},
	{
		name: FilterNameEnums.arg_idszinonimai,
		type: FilterTypeEnums.text
	}
];
