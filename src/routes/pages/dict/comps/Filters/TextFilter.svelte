<script lang="ts">

    import {FilterStaticType} from "../../data/types/FilterStaticType";
    import {FilterStoreCommands} from "../../apiClient/FilterStore/FilterStore"
    import {oiu} from "../../../../../Egyebek/oiu"

    export let FilterData:FilterStaticType
    export let FilterValue=""

</script><!--
<div class="">
    <a>{FilterData.name}</a>
<input type="text" on:change value={FilterData.value?FilterData.value:""} >
  &lt;!&ndash;  <input type="button" value="delete" on:click>&ndash;&gt;

</div>
-->

<p class="font-bold">{FilterData.name}</p>
<input
        type="text"
        class="bg-green-700 h-full w-52 text-xl"
        value={FilterValue||""  }
        on:change={(e) => {
				FilterStoreCommands.updateURL((old) => {
					//oiu.set(	old,filterName,filterTextValue)
					//let a = oiu.create();

					oiu.set(old, FilterData.name, e.target.value);
					return old
				});
			}}
/>