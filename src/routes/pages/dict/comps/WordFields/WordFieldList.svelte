<script lang="ts">
	// your script goes here

	export let data: { numbers?: string; text?: string }[] = [];
$:data2=data.sort(function (a, b) {
	if (a.numbers > b.numbers) {
		return 1;
	}
	if (b.numbers > a.numbers) {
		return -1;
	}
	return 0;
});
	/*  $: grouped=()=>{
        let group=[]
        let aktualis=""
        data.forEach(value => {
            if (aktualis==value.numbers){
                group.push()
            }

    })}*/
	let colors = {
		a: 'bg-red-500',
		b: 'bg-blue-500',
		c: 'bg-yellow-500',
		z: 'bg-green-500',
		d: 'bg-purple-500',
		e: 'bg-pink-500',
		f: 'bg-brown-500'
	};
</script>

{#each data2 as d, i}
	{#if data2[i]}

		<p class="w-full font-bold {colors[data2[i].numbers]} mb-0.5 p-0.5">{data2[i]?.text ??data2[i]} </p>
	{/if}
{/each}
