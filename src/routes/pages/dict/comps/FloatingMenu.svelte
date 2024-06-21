<script lang="ts">
	import { WordActions } from '../apiClient/WordsStore/WordActions';
	import {
		WordsStore,
		WordsStoreCommands,
		WordsStoreValue
	} from '../apiClient/WordsStore/WordsStore';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let showFloatingMenu = false;
</script>

{#if showFloatingMenu === true}
	<div
		style=" position: absolute;
            background-color: rgba(61,57,60,0.64);
            z-index: 1000;
            width: 100%;
            height: 100%;
            "
		on:click={() => {
			 event.stopPropagation();
			showFloatingMenu = false;
			dispatch('menuClosed');
		}}
	>
		<div
			style=" position: absolute;
            background-color: #fff;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
left: 0px;right: 0px;top:0px;bottom: 50px;overflow: auto;
            "
		on:click={(event)=>{
           event.stopPropagation();

		}}>
			<slot />
		</div>
	</div>
{/if}
