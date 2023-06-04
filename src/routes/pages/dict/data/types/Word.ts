import { WordSzintek } from '../enums/WordSzintek';
import { WordNevelok } from '../enums/WordNevelok';

export interface Word {
	szo: string;
	szint?: WordSzintek;
	id: string;
	tudasszint: number;
	nevelo: WordNevelok;
	szoto: string;
	szinonimatudasszint: number;
	magyar: string[];
	sentences: string[];
	szinonima: string[];
}
