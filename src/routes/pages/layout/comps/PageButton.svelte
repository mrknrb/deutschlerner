<script lang="ts">
	export let name = '';
	export let src = '';
	export let imgsrc = '';
	function openPage(src: string) {
		window.open('/' + src, '_self');
	}
</script>

<div
	class="h-12  w-12 cursor-pointer hover:backdrop-brightness-110 flex flex-row justify-center flex-wrap content-center"
	on:click={openPage(src)}
>
	{#if imgsrc}
		<img src={imgsrc} class="" />
	{/if}

	<h2 class="text-center">{name}</h2>
</div>
