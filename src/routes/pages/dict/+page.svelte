<script lang="ts">
	import { onMount } from 'svelte';

	import WordTable from './comps/WordTable.svelte';
	import { WordFieldsStatic } from './data/static/WordFieldsStatic';
    import {supabase} from "../../../lib/supabaseClient";
    import {WordsStore, WordsStoreCommands} from "./apiClient/WordsStore/WordsStore"

let data:any[]=[]
	onMount( () => {
WordsStoreCommands.refreshWords()
	/*		const response = await fetch('/pages/dict/apiServer/i', {
			method: 'get',
			headers: {
				'content-type': 'application/json'
			}
		});

		 total = await response.json()*/



	});
</script>

<div style="flex: 0 1 50px" class="overflow-auto relative flex flex-row ">


    <button class="bg-green-30 p-4" on:click={ ()=>{
WordsStoreCommands.refreshWords()

}}>Refresh</button>



</div>


<div style="flex: 1 1 auto" class=" relative flex flex-row ">

    <WordTable words={$WordsStore.szavak} fields={WordFieldsStatic}/>


</div>