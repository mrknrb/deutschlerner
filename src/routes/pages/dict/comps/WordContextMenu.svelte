<script>
import {WordActions} from "../apiClient/WordsStore/WordActions";
import {WordsStore, WordsStoreCommands, WordsStoreValue} from "../apiClient/WordsStore/WordsStore";

$:selectedWord=$WordsStore.selectedWord

</script>
{#if selectedWord!==undefined}

    <div style=" position: absolute;
            background-color: rgba(61,57,60,0.64);
            z-index: 1000;
            width: 100%;
            height: 100%;
            "   on:click={()=>{
            WordsStoreCommands.selectWord(undefined)

        }}>

        <div  style=" position: relative;
            background-color: #fff;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
margin: 50px;width: fit-content;
            ">
            <i class="relative cursor-pointer">{ selectedWord.szo}</i>
            {#each WordActions as field,o}
                <div class="relative border-gray-400  border-solid border-r-2 hover:bg-amber-500 cursor-pointer p-4"
                     on:click={()=>{
            field.func(selectedWord)

        }}>
                    <b class="relative cursor-pointer">{ field.name}</b>

                </div>

            {/each}

        </div>

    </div>

{/if}