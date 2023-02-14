<script lang="ts">
	import { FieldTypes } from '../data/enums/fieldTypes';
	import { fieldBasic } from '../data/types/fieldBasic';
	import WordFieldString from './WordFields/WordFieldString.svelte';
    import {Word} from "../data/types/Word";
    import WordFieldList from "./WordFields/WordFieldList.svelte"
	export let word: Word;

	export let fields: fieldBasic[] = [];
   console.log("megy");
   
</script>
<tr class="bg-gray-300 h-10  border-indigo-500 border-solid border-4 align-top">
{#each fields as field}
    <td>

        {#if word[field.name]}

            {#if field.type===FieldTypes.string}

                <WordFieldString  data={word[field.name]}> </WordFieldString>

            {:else if  field.type===FieldTypes.list}


                <WordFieldList  data={word[field.name]}> </WordFieldList>


                <!-- else if content here -->
            {:else}
                <!-- else content here -->
            {/if}


        {/if}
    </td>

{/each}
</tr>