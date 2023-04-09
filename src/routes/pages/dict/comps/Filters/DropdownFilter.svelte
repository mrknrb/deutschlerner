<script lang="ts">

    import {FilterStaticType} from "../../data/types/FilterStaticType";
    import {FilterStoreCommands} from "../../apiClient/FilterStore/FilterStore"
    import {oiu} from "../../../../../Egyebek/oiu"

    export let FilterData:FilterStaticType
    export let FilterValue=""
    console.log(FilterData)
</script>
<div class="flex flex-col w-32 ">

    <b class="font-bold text-xs">{FilterData.name}</b>

    <select  class="border-4 border-gray-900 bg-green-700 h-full  text-xl" value={FilterValue ||""} on:change={(e) => {
				FilterStoreCommands.updateURL((old) => {
					//oiu.set(	old,filterName,filterTextValue)
					//let a = oiu.create();

					oiu.set(old, FilterData.name, e.target.value);
					return old
				});
			}}>
        {#each FilterData.staticData as filter, i}
         <option class="h-6" value={filter}>{filter}</option>
        {/each}

    </select>


</div>
