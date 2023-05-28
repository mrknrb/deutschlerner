<script lang="ts">
	import { onMount } from 'svelte';

	import WordTable from './comps/WordTable.svelte';
	import { WordFieldsStatic } from './data/static/WordFieldsStatic';
	import { supabase } from '../../../lib/supabaseClient';
	import { WordsStore, WordsStoreCommands } from './apiClient/WordsStore/WordsStore';
	import {
		FilterStore,
		FilterStoreCommands,
		FilterStoreValue
	} from './apiClient/FilterStore/FilterStore';
	import TextFilter from './comps/Filters/TextFilter.svelte';
	import ButtonFilter from './comps/Filters/ButtonFilter.svelte';
	import FilterGenerator from './comps/Filters/FilterGenerator.svelte';
	import { WordFiltersStatic } from './data/static/WordFiltersStatic';
	import { FilterNameEnums } from './data/enums/FilterNameEnums';
	import { oiu } from '../../../Egyebek/oiu';
	import { speech } from '../../../lib/speechObject';
	import {WordsStoreValue} from "./apiClient/WordsStore/WordsStore.js";
	let data: any[] = [];
	onMount(() => {
		window.addEventListener('popstate', function () {
			console.log('location changed!');
		});

		WordsStoreCommands.refreshWordsFromURL();
	});
</script>

<div style="flex: 0 1 50px" class=" relative flex flex-row overflow-auto">
	<!--	<button
		class="bg-green-300 p-4"
		on:click={() => {
			WordsStoreCommands.refreshWords();
		}}>Refresh</button
	>-->
	{#each WordFiltersStatic as filter, i}
		<FilterGenerator
			FilterData={WordFiltersStatic[i]}
			FilterValue={oiu.get($FilterStore, WordFiltersStatic[i].name)}
		/>
	{/each}
	<div>
		<input
			value="pause"
			type="button"
			class="w-30 h-full bg-blue-500"
			on:click={() => {
				speech.cancel();

			}}
		/><input
			value="copy all words"
			type="button"
			class="w-30 h-full bg-green-500"
			on:click={() => {
			 navigator.clipboard.writeText(JSON.stringify(	WordsStoreValue.szavak.map(value =>{return value.szo} )));

			}}
		/>
	</div>
</div>

<div style="flex: 1 1 auto" class=" relative flex flex-row ">
	<WordTable words={$WordsStore.szavak} fields={WordFieldsStatic} />
</div>
