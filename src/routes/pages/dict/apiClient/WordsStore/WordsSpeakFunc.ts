import { Word } from '../../data/types/Word';
import { speech } from '../../../../../lib/speechObject';

export function WordsSpeakFunc(words: Word[]) {
	let readtext = '';
	words.forEach((value) => {
		/*readtext += JSON.stringify(
            value.angol.map((value) => {
                return value.text;
            })
        );*/
		readtext += '1. 2. 3.';
		readtext += value.szo + '. ';
		readtext += JSON.stringify(value.magyar);
		readtext += value.szo + '. ';
		getRandom(value.sentences, 5).forEach((value1, i) => {
			for (let j = 0; j < 2; j++) {
				readtext += ' ';
				readtext += value1;
				readtext += ' ';
			}
		});
	});
	speech.speak({
		text: readtext,
		listeners: {
			onend: () => {
				if (!speech.speaking()) {
					WordsSpeakFunc(words);
				}
			}
		}
	});
}
export function TextSpeakFunc(text: string) {
	let readtext = '1. 2. 3.';
	readtext += text;

	speech.speak({
		text: readtext,
		listeners: {
			onend: () => {
				if (!speech.speaking()) {
					TextSpeakFunc(text);
				}
			}
		}
	});
}
function getRandom(arr: any[], n: number) {
	if (arr.length < n) n = arr.length;
	let result = new Array(n),
		len = arr.length,
		taken = new Array(len);
	if (n > len) throw new RangeError('getRandom: more elements taken than available');
	while (n--) {
		let x = Math.floor(Math.random() * len);
		result[n] = arr[x in taken ? taken[x] : x];
		taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
}
