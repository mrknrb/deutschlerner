<script lang="ts">

    export let data:{func:()=>{} ,name:string,color:string}={}


</script>


<input
        value={data.name}
        type="button"
        class="w-32 p-2 {data.color} ml-2 rounded hoverClick"
        on:click={data.func}
/>