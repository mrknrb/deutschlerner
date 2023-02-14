<script lang="ts">
	import { fieldBasic } from "../data/types/fieldBasic";
	import WordRow from './WordRow.svelte';
    import {Word} from "../data/types/Word";

   export let fields:fieldBasic[]=[]
 export let words:Word[]=[]
   
</script>
<div class="absolute top-0 left-0 bottom-0 right-0 overflow-auto">


   <table class="w-fit  table-fixed ">
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


</div>