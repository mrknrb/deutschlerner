<script lang="ts">
	import { FilterStaticType } from '../../data/types/FilterStaticType';
    import {FilterStoreCommands} from "../../apiClient/FilterStore/FilterStore"
    import {oiu} from "../../../../../Egyebek/oiu"

	export let FilterData: FilterStaticType;
	export let FilterValue = false;
</script>

<div class="">
	<input
		type="button"
		on:click
		value={FilterData.name}
		class="hoverClick {FilterValue?'bg-green-700':'bg-red-700'} h-full"
		on:click={(e) => {
			FilterStoreCommands.updateURL((old) => {
				//oiu.set(	old,filterName,filterTextValue)
				//let a = oiu.create();

				oiu.set(old, FilterData.name, !FilterValue);
				return old;
			});
		}}
	/>
	<!-- <input type="button" value="delete" on:click>-->
</div>
