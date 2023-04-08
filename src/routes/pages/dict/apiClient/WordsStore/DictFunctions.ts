import { FilterStoreValue } from '../FilterStore/FilterStore';
import { supabase } from '../../../../../lib/supabaseClient';
import { WordsStore } from './WordsStore';

export function tudasszintNovelo(elozoSzint?: number) {
	if (elozoSzint === null) return 0;
	if (elozoSzint < 4) {
		return elozoSzint + 1;
	} else {
		return 0;
	}
}
