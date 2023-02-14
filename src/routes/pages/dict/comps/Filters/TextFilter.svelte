<script lang="ts">

    import {FilterDataType} from "../../data/types/FilterDataType";

    export let FilterData:FilterDataType


</script>
<div class="">
    <a>{FilterData.name}</a>
<input type="text" on:change value={FilterData.value?FilterData.value:""} >
  <!--  <input type="button" value="delete" on:click>-->

</div>