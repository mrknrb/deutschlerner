<script lang="ts">
	import { fieldTypes } from '../data/enums/fieldTypes';
	import { fieldBasic } from '../data/types/fieldBasic';
	import WordFieldString from './WordFields/WordFieldString.svelte';

	export let data: any;

	export let fields: fieldBasic[] = [];
   console.log("megy");
   
</script>
<tr class="bg-gray-300 h-10  border-indigo-500 border-solid border-4 ">
{#each fields as field}
{#if field.type==fieldTypes.string}
  
<WordFieldString  data={data[field.name]}> </WordFieldString>

{:else if  false}
    <!-- else if content here -->
{:else}
    <!-- else content here -->
{/if}
{/each}
</tr>