import { json } from '@sveltejs/kit';
import { Configuration, OpenAIApi } from 'openai';
import { Word } from '../../pages/dict/data/types/Word.js';
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
		model: 'gpt-3.5-turbo',
		max_tokens: 2000,
		temperature: 0.8,
		messages: [
			{
				role: 'system',
				content:
					'The user will give you a list of words and your job is to generate a cool, fun or "jack london style" story from them. it should be in german and its purpose is to teach him the meaning of the words. it should use the words more times. it should be around a 1500 word long.'
			},
			{ role: 'user', content: JSON.stringify(word.szinonima) }
		]
	});
	console.log(response);
	//	console.log(response.data.choices);
	return json(response.data.choices[0].message?.content);
}
