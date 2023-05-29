import { fieldBasic } from '../dict/data/types/fieldBasic';
import { WordFields } from '../dict/data/enums/WordFields';
import { FieldTypes } from '../dict/data/enums/fieldTypes';
import { WordSzintek } from '../dict/data/enums/WordSzintek';

export const MemoFieldsStatic: fieldBasic[] = [
	{
		name: 'text',
		type: FieldTypes.string,
		size: 100
	},
	{
		name: 'id',
		type: FieldTypes.string,
		size: 5
	}
];
