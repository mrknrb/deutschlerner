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
		a: 'bg-red-300',
		b: 'bg-blue-300',
		c: 'bg-yellow-300',
		z: 'bg-green-300',
		d: 'bg-purple-300',
		e: 'bg-pink-300',
		f: 'bg-brown-300'
	};
</script>

{#each data2 as d, i}
	{#if data2[i]}

		<a class="break-words w-full font-bold {colors[data2[i].numbers]?colors[data2[i].numbers]: 'bg-zinc-400'} rounded mr-2 p-1">{@html   data2[i]?.text ??data2[i]} </a>
	{/if}
{/each}
