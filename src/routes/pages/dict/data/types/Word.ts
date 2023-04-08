import { WordSzintek } from '../enums/WordSzintek';
import { WordNevelok } from '../enums/WordNevelok';

export interface Word {
	szo: string;
	szint?: WordSzintek;
	id: string;
	tudasszint: number;
	nevelo: WordNevelok;

	szinonimatudasszint: number;
}
