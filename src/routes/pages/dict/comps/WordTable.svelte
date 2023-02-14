<script lang="ts">
	import { fieldBasic } from "../data/types/fieldBasic";
	import WordRow from './WordRow.svelte';
    import {Word} from "../data/types/Word";

   export let fields:fieldBasic[]=[]
 export let words:Word[]=[]
   
</script>
<table class="w-fit  table-fixed absolute ">
   <thead class="  ">
      {#each fields as field,i}

         <td
         style='width: { fields[i].size?fields[i].size:"12"}rem'>
            {fields[i].name}


         </td>
      {/each}
   </thead>
{#each words as word}
   <WordRow {word} {fields}></WordRow>
{/each}


</table>