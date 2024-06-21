<script lang="ts">
	import { fieldBasic } from '../data/types/fieldBasic';
	import WordRow from './WordRow.svelte';
	import { Word } from '../data/types/Word';

	export let fields: fieldBasic[] = [];
	export let words: Word[] = [];
</script>

<div class="overflow-auto absolute top-0 left-0 bottom-0 right-0 ">
	<table class="w-fit  table-fixed  border-separate">
		<thead class="  " style="position: sticky;
		top: 0;
		background: white; /* Ensure the header has a background */
		z-index: 51; /* Ensure it stays on top */">
			{#each fields as field, i}
				<th style="width: {fields[i].size ? fields[i].size : '16'}rem; position: {fields[i].sticky ? 'sticky' : 'block'};left: {fields[i].sticky ? '0' : '0'}; background-color: inherit">
					{fields[i].name}
				</th>
			{/each}
		</thead>
		{#each words as word}
			<WordRow {word} {fields} />
		{/each}
	</table>
</div>
