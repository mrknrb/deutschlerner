import Speech from 'speak-tts/lib/speak-tts.js';

export const speech = new Speech();
speech
	.init({
		volume: 1,
		lang: 'de-DE',
		rate: 1.3,
		pitch: 1,
		voice: 'Google Deutsch',
		splitSentences: true,
		listeners: {
			onvoiceschanged: (voices) => {
				console.log('Event voiceschanged', voices);
			}
		}
	})
	.then((data) => {
		// The "data" object contains the list of available voices and the voice synthesis params
		console.log('Speech is ready, voices are available', data);

		//speech.setLanguage('en-US');
		//speech.setVoice('Google US English');
	})
	.catch((e) => {
		console.error('An error occured while initializing : ', e);
	});

export let mrkLanguages = {
	hu: {
		lang: 'hu-HU',
		voice: 'Microsoft Szabolcs - Hungarian (Hungary)'
	},
	de: {
		lang: 'de-DE',
		voice: 'Google Deutsch'
	},
	en: {
		lang: 'en-US',
		voice: 'Google US English'
	}
} as const;

let mrkSpeech = {
	speakList: (inputList: { text: string; language: typeof mrkLanguages }[]) => {}
};
mrkSpeech.speakList([{ text: 'fdfsdf', language: mrkLanguages.hu }]);
