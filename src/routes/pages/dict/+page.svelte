<script lang="ts">
	import { onMount } from 'svelte';

	import WordTable from './comps/WordTable.svelte';
	import { WordFieldsStatic } from './data/static/WordFieldsStatic';
	import { supabase } from '../../../lib/supabaseClient';
	import { WordsStore, WordsStoreCommands } from './apiClient/WordsStore/WordsStore';
	import { FilterStore, FilterStoreCommands } from './apiClient/FilterStore/FilterStore';
	import TextFilter from './comps/Filters/TextFilter.svelte';
	import ButtonFilter from './comps/Filters/ButtonFilter.svelte';

	let data: any[] = [];
	onMount(() => {
		window.addEventListener('popstate', function () {
			console.log('location changed!');
		});

		WordsStoreCommands.refreshWordsFromURL();
	});
</script>

<div style="flex: 0 1 50px" class=" relative flex flex-row ">
	<button
		class="bg-green-30 p-4"
		on:click={() => {
			WordsStoreCommands.refreshWords();
		}}>Refresh</button
	>
	<TextFilter
		FilterData={{ value: $FilterStore.arg_szo, name: 'szo' }}
		on:change={(e) => {
			FilterStoreCommands.updateURL((old) => {
				old.arg_szo = e.target.value;
				return old;
			});
		}}
	/>
	<TextFilter
		FilterData={{ value: $FilterStore.arg_idszinonimai, name: 'szinonimai' }}
		on:change={(e) => {
			FilterStoreCommands.updateURL((old) => {
				let ures = {};
				ures.arg_idszinonimai = e.target.value;
				return ures;
			});
		}}
	/>
	<ButtonFilter
		FilterData={{ name: 'tanulando' }}
		on:click={(e) => {
			FilterStoreCommands.updateURL((old) => {
				if (old.arg_tanulando) {
					delete old.arg_tanulando;
				} else {
					old={}
					old.arg_tanulando = true;
				}

				return old;
			});
		}}
	/>
</div>

<div style="flex: 1 1 auto" class=" relative flex flex-row ">
	<WordTable words={$WordsStore.szavak} fields={WordFieldsStatic} />
</div>
