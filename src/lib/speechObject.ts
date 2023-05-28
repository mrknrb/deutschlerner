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
	})
	.catch((e) => {
		console.error('An error occured while initializing : ', e);
	});
