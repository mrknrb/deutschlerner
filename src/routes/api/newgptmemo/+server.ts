import { json } from '@sveltejs/kit';
import { Configuration, OpenAIApi } from 'openai';
import { Word } from '../../pages/dict/data/types/Word';
import { config } from 'dotenv';

config();
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const word: Word = await request.json();
	const configuration = new Configuration({
		username: 'mrk',
		apiKey: process.env.OPEN_AI_KEY
	});
	const openai = new OpenAIApi(configuration);
	const response = await openai.createChatCompletion({
		model: 'gpt-4o',
		max_tokens: 2000,
		temperature: 0.8,
		messages: [
			{
				role: 'system',
				content:
					//	'The user will give you a list of words and your job is to generate an answer for him. your answer should be in german. the order of the words doesnt matter. its purpose is to teach him the meanings of the words. if they are very similar, speak about them at the same time, while telling the differences between them  it should be around a 1500 word long.'

					'The user will give you a list of words and your job is to generate a cool, fun story or tale from them. do not use bold fonts, only plain text! the order of the words should be random. it should be in german and its purpose is to teach him the meaning of the words. it should use the words more times. it should be around a 1500 word long.'
			},
			{ role: 'user', content: JSON.stringify(word.szinonima) }
		]
	});
	console.log(response);
	//	console.log(response.data.choices);
	return json(response.data.choices[0].message?.content);
}
