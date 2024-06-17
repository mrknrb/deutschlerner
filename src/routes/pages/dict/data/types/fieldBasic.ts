import { FieldTypes } from '../enums/fieldTypes';
import { Word } from './Word';

export interface fieldBasic {
	name: string;
	type: FieldTypes;
	size?: number;
	szinek?: { fieldValue: string; szin: string }[];
	szin?: (word: Word) => string;
	clickAction?: (data: Word) => void;
	sticky?: boolean;
}
