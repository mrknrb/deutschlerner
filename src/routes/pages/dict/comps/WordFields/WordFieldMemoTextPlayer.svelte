<script lang="ts">
	// your script goes here

	import { supabase } from '$lib/supabaseClient.js';
	import { WordsStoreCommands } from '../../apiClient/WordsStore/WordsStore.js';
	import { Word } from '../../data/types/Word';
	import { speech } from '../../../../../lib/speechObject.js';
	import {TextSpeakFunc} from "../../apiClient/WordsStore/WordsSpeakFunc.js";

	export let wordData: Word;
	export let data: { id?: string; text?: string }[] = [];
</script>

{#each data as d, i}
	{#if data[i]}
		<a
			class="break-words w-full font-bold rounded mr-2 p-1"
			on:click={() => {
				TextSpeakFunc(data[i]?.text)

			}}>{data[i]?.text.slice(0, 30)}...</a
		>
		<input
			type="button"
			class="w-8 h-full bg-red-500"
			value="X"
			on:click={async (event) => {
				if (confirm('Are you sure that you want to delete it?') == true) {
					await supabase.rpc('memotextdelete', {
						arg_textid: data[i]?.id
					});
					setTimeout(async (args) => {
						await WordsStoreCommands.refreshOneWord(wordData.id);
					}, 2000);
				}
			}}
		/>
	{/if}
{/each}
<input
	on:change={async (event) => {
		await supabase.rpc('memotextadd', {
			arg_wordrowid: wordData.id,
			arg_text: event.target.value
		});
		event.target.value = '';
		setTimeout(async (args) => {
			await WordsStoreCommands.refreshOneWord(wordData.id);
		}, 2000);
	}}
/>
