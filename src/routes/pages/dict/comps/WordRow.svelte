<script lang="ts">
	import { FieldTypes } from '../data/enums/fieldTypes';
	import { fieldBasic } from '../data/types/fieldBasic';
	import WordFieldString from './WordFields/WordFieldString.svelte';
	import { Word } from '../data/types/Word';
	import WordFieldList from './WordFields/WordFieldList.svelte';
	import WordFieldMemoTextPlayer from './WordFields/WordFieldMemoTextPlayer.svelte';
	import { WordsStoreCommands } from '../apiClient/WordsStore/WordsStore';
	import { WordsStore } from '../apiClient/WordsStore/WordsStore';
	import { WordActions } from '../apiClient/WordsStore/WordActions';
	export let word: Word;

	export let fields: fieldBasic[] = [];

	function szin(o: number, word) {
		if (!fields[o].szin) return '';
		return fields[o].szin(word);
	}
</script>

<tr
	class="bg-gray-300 h-10  border-gray-600  border-b-4 align-top border-l-0  "
	on:click={(e) => {
		if ($WordsStore.tudasszintEgyklickNovelo) {
			let funcObject = WordActions.find((value) => {
				return value.name === 'tudasszintNoveles';
			});
			funcObject.func(word);
		} else {
			WordsStoreCommands.selectWord(word);
		}
	}}
>
	{#each fields as field, i}
		<td
			class="   "
			style="position: {fields[i].sticky ? 'sticky' : 'block'};left: {fields[i].sticky
				? '0'
				: '0'};background-color: inherit;   z-index: {fields[i].sticky ? '50' : '0'}"
		>
			{#if word[field.name] !== undefined && word[field.name] !== null}
				{#if field.type === FieldTypes.string}
					<WordFieldString szin={szin(i, word)} data={word[field.name]} />
				{:else if field.type === FieldTypes.list}
					<WordFieldList data={word[field.name]} />
				{:else if field.type === FieldTypes.textplayer}
					<WordFieldMemoTextPlayer wordData={word} data={word[field.name]} />
				{:else if field.type === FieldTypes.longlist}
					<div class="relative overflow-hidden h-20" style="width: inherit ">
						<WordFieldList data={word[field.name]} />
					</div>
				{/if}
			{/if}
		</td>
	{/each}
</tr>
