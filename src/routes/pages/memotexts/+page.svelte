<script lang="ts">
	import { onMount } from 'svelte';
	import WordTable from "../dict/comps/WordTable.svelte";
	import {MemoStore, MemoStoreCommands} from "./MemoStore.js";
	import {MemoFieldsStatic} from "./MemoFieldsStatic.js";
	let data: any[] = [];
	onMount(() => {
		window.addEventListener('popstate', function () {
			console.log('location changed!');
		});
		MemoStoreCommands.refreshMemos()
	});
</script>

<div style="flex: 0 1 50px" class=" relative flex flex-row overflow-auto">


	<div>

	</div>
</div>

<div style="flex: 1 1 auto" class=" relative flex flex-row ">
	<WordTable words={$MemoStore.memok} fields={MemoFieldsStatic} />
</div>
