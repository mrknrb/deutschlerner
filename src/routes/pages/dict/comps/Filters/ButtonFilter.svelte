<script lang="ts">

    import {FilterDataType} from "../../data/types/FilterDataType";

    export let FilterData:FilterDataType


</script>
<div class="">
    <input type="button" on:click value={FilterData.name} class="hoverClick bg-green-700">
   <!-- <input type="button" value="delete" on:click>-->

</div>