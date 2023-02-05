<script lang="ts">
	import { onMount } from 'svelte';

	import WordTable from './comps/WordTable.svelte';
	import { WordFieldsStatic } from './data/static/WordFieldsStatic';

let total:any[]=[]
/*	onMount(async () => {
			const response = await fetch('/pages/dict/apiServer/i', {
			method: 'get',
			headers: {
				'content-type': 'application/json'
			}
		});

		 total = await response.json()
		console.log(total);

	});*/
</script>

<WordTable data={total} fields={WordFieldsStatic}/>
