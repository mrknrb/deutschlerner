<script lang="ts">
	import { FieldTypes } from '../data/enums/fieldTypes';
	import { fieldBasic } from '../data/types/fieldBasic';
	import WordFieldString from './WordFields/WordFieldString.svelte';
    import {Word} from "../data/types/Word";
    import WordFieldList from "./WordFields/WordFieldList.svelte"
	export let word: Word;

	export let fields: fieldBasic[] = [];

 /*  $: szingenerator=(field:fieldBasic)=>{
       if (!field?.szinek||!word[field.name])return

       let a = field?.szinek?.find((l)=>{l.fieldValue===word[field.name]})
       if(a) {
           console.log(a)
       }
return a
   }*/
    function szin(o:number,word){
      if (!fields[o].szin)return ""
       return fields[o].szin(word)

    }



</script>
<tr class="bg-gray-300 h-10  border-indigo-500 border-solid border-4 align-top">
{#each fields as field,o}
    <td on:click={()=>{
        fields[o]?.clickAction(word)

    }}>

        {#if word[field.name]!==undefined&&word[field.name]!==null}

            {#if field.type===FieldTypes.string}

                <WordFieldString szin={szin(o,word) }  data={word[field.name]}> </WordFieldString>

            {:else if  field.type===FieldTypes.list}


                <WordFieldList  data={word[field.name]}> </WordFieldList>


                <!-- else if content here -->

                <!-- else content here -->
            {/if}


        {/if}
    </td>

{/each}
</tr>