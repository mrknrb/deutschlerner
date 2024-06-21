<script lang="ts">
	import FloatingMenu from '../FloatingMenu.svelte';
	import { FilterStore } from '../../apiClient/FilterStore/FilterStore';
	import { WordFiltersStatic } from '../../data/static/WordFiltersStatic';
	import FilterGenerator from './FilterGenerator.svelte';
	import { oiu } from '../../../../../Egyebek/oiu';
	import { speech } from '$lib/speechObject';
	import { WordsSpeakFunc } from '../../apiClient/WordsStore/WordsSpeakFunc';
	import { WordsStoreValue } from '../../apiClient/WordsStore/WordsStore';
	import TopButton from '../TopButton.svelte';
</script>

<FloatingMenu
	showFloatingMenu={$FilterStore.floatingFilterMenuVisible}
	on:menuClosed={() => {
		FilterStore.update((value) => {
			value.floatingFilterMenuVisible = false;
			return value;
		});
	}}
 class="flex-col">
	{#each WordFiltersStatic as filter, i}
		<FilterGenerator
			FilterData={WordFiltersStatic[i]}
			FilterValue={oiu.get($FilterStore, WordFiltersStatic[i].name)}
		/>
	{/each}

	<TopButton
		data={{
			name: 'Copy all words',
			color: 'bg-blue-500',
			func: () => {
				navigator.clipboard.writeText(
					JSON.stringify(
						WordsStoreValue.szavak.map((value) => {
							return value.szo;
						})
					)
				);
			}
		}}
	/>
	<TopButton
		data={{
			name: 'Mind Felolvas',
			color: 'bg-blue-500',
			func: () => {
				WordsSpeakFunc(WordsStoreValue.szavak);
			}
		}}
	/>
	<input
		class="w-24 p-2 bg-cyan-500 ml-2 "
		on:change={(event) => {
			speech.setRate(event.target.value);
		}}
	/>
</FloatingMenu>
