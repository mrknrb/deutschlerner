<script lang="ts">
 import FloatingMenu from "../FloatingMenu.svelte";
 import {FilterStore} from "../../apiClient/FilterStore/FilterStore";


</script>

<FloatingMenu showFloatingMenu={$FilterStore.floatingFilterMenuVisible} on:menuClosed={() => {
FilterStore.update((value) => {

		value.floatingFilterMenuVisible=false
		return value;
	});

}}>
    <i class="relative cursor-pointer">"iiii</i>

</FloatingMenu>
