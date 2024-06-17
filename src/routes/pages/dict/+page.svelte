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
	import { WordsStoreValue } from './apiClient/WordsStore/WordsStore.js';
	import {WordsSpeakFunc} from "./apiClient/WordsStore/WordsSpeakFunc.js";
	import WordContextMenu from "./comps/WordContextMenu.svelte";
	import TopButton from "./comps/TopButton.svelte";
	import PageButton from "../layout/comps/PageButton.svelte";
	let data: any[] = [];
	onMount(() => {
		window.addEventListener('popstate', function () {
			console.log('location changed!');
		});

		WordsStoreCommands.refreshWordsFromURL();
	});
	$: colorTudas=()=> {

		if($WordsStore.tudasszintEgyklickNovelo) {
			return "bg-green-500"
		}else {
			return "bg-red-500"
		}
	}
</script>

<WordContextMenu></WordContextMenu>
<div style="" class=" relative flex flex-row overflow-x-auto" >
	<!--	<button
		class="bg-green-300 p-4"
		on:click={() => {
			WordsStoreCommands.refreshWords();
		}}>Refresh</button
	>-->

	<PageButton imgsrc="/images/logo.png"></PageButton>
	{#each WordFiltersStatic as filter, i}
		<FilterGenerator
			FilterData={WordFiltersStatic[i]}
			FilterValue={oiu.get($FilterStore, WordFiltersStatic[i].name)}
		/>
	{/each}

	<TopButton data={{name:"Pause",color:"bg-blue-500",func:() => {
				speech.cancel();
			}}}></TopButton>

	<TopButton data={{name:"Copy all words",color:"bg-blue-500",func:() => {
				navigator.clipboard.writeText(
					JSON.stringify(
						WordsStoreValue.szavak.map((value) => {
							return value.szo;
						})
					)
				);
			}}}></TopButton>
	<TopButton data={{name:"Mind Felolvas",color:"bg-blue-500",func:() => {
				WordsSpeakFunc(WordsStoreValue.szavak)
			}}}></TopButton>
	<TopButton data={{name:"One Click Tudasszint",color:colorTudas(),func:() => {

	WordsStore.update((value) => {
		value.tudasszintEgyklickNovelo = !value.tudasszintEgyklickNovelo;

		return value;
	});
			}}}></TopButton>


<input


			class="w-24 h-full bg-cyan-500 ml-2 "
			on:change={(event) => {
			speech.setRate(event.target.value)
			}}
	/>
</div>

<div style="flex: 1 1 auto" class=" relative flex flex-row ">
	<WordTable words={$WordsStore.szavak} fields={WordFieldsStatic} />
</div>
