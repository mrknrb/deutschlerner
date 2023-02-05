import { error } from '@sveltejs/kit';

import pgp3 from 'pg-promise';
const pgp2 = pgp3();
let db = pgp2({
	user: 'postgres',
	host: 'localhost',
	database: 'deutschdb',
	password: 'mlnd',
	port: 5432
});
/** @type {import('./$types').RequestHandler} */
export async function GET() {
	try {
		const users = await db.any('SELECT * FROM public.szavak LIMIT 100');


		return new Response(String(JSON.stringify(users)));
	} catch (e) {
		return new Response(String('fail'));
	}
}
