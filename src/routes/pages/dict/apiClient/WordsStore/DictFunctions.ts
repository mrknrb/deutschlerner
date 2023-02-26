export function tudasszintNovelo(elozoSzint?: number) {
	if (elozoSzint === undefined) return 1;
	if (elozoSzint < 4) {
		return elozoSzint + 1;
	} else {
		return 0;
	}
}
