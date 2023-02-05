<script lang="ts">
	import { fieldBasic } from "../data/types/fieldBasic";
	import WordRow from './WordRow.svelte';


   export let fields:fieldBasic[]=[]
 export let data:any[]=[]
   
</script>
<table>
   
{#each data as word}
   <WordRow data={word} {fields}></WordRow>
{/each}
</table>