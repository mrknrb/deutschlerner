<script lang="ts">
	import { onMount } from 'svelte';

	import WordTable from './comps/WordTable.svelte';
	import { WordFieldsStatic } from './data/static/WordFieldsStatic';
	import { supabase } from '../../../lib/supabaseClient';
	import { WordsStore, WordsStoreCommands } from './apiClient/WordsStore/WordsStore';
	import {FilterStore, FilterStoreCommands, FilterStoreValue} from './apiClient/FilterStore/FilterStore';
	import TextFilter from './comps/Filters/TextFilter.svelte';
	import ButtonFilter from './comps/Filters/ButtonFilter.svelte';
	import FilterGenerator from './comps/Filters/FilterGenerator.svelte';
	import { WordFiltersStatic } from './data/static/WordFiltersStatic';
	import { FilterNameEnums } from './data/enums/FilterNameEnums';
	import { oiu } from '../../../Egyebek/oiu';

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
		<!--<p class="font-bold">{WordFiltersStatic[i].name}</p>
		<input
			type="text"
			class="bg-green-700 h-full w-52 text-xl"
			value={oiu.get($FilterStore,WordFiltersStatic[i].name)||""  }
			on:change={(e) => {
				FilterStoreCommands.updateURL((old) => {
					//oiu.set(	old,filterName,filterTextValue)
					//let a = oiu.create();

					oiu.set(old, WordFiltersStatic[i].name, e.target.value);
					return old
				});
			}}
		/>-->
		<FilterGenerator FilterData={WordFiltersStatic[i]} FilterValue={oiu.get($FilterStore,WordFiltersStatic[i].name)}></FilterGenerator>

	{/each}

</div>

<div style="flex: 1 1 auto" class=" relative flex flex-row ">
	<WordTable words={$WordsStore.szavak} fields={WordFieldsStatic} />
</div>
