<script lang="ts">
	import { WordActions } from '../apiClient/WordsStore/WordActions';
	import {
		WordsStore,
		WordsStoreCommands,
		WordsStoreValue
	} from '../apiClient/WordsStore/WordsStore';
	import FloatingMenu from './FloatingMenu.svelte';

	$: selectedWord = $WordsStore.selectedWord;
</script>

<FloatingMenu showFloatingMenu={!!selectedWord} on:menuClosed={() => {

  WordsStoreCommands.  selectWord(undefined)

}}>
	<i class="relative cursor-pointer">{selectedWord.szo}</i>
	{#each WordActions as field, o}
		<div
			class="relative border-gray-400  border-solid border-r-2 hover:bg-amber-500 cursor-pointer p-4"
			on:click={() => {
				field.func(selectedWord);
				 WordsStoreCommands.  selectWord(undefined)
			}}
		>
			<b class="relative cursor-pointer">{field.name}</b>
		</div>
	{/each}
</FloatingMenu>
