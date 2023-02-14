<script lang="ts">
	import '../app.css';
	import '../scrollbar.css';


	import PageButton from './pages/layout/comps/PageButton.svelte';

</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
	</style>
</svelte:head>

<header class=" sticky ">
	<div style="height: 50px" class="  flex flex-row overflow-hidden">
		<div
			class="h-full  w-24  flex flex-row justify-center flex-wrap content-center hover:backdrop-brightness-110"
			on:click={() => {
				window.open('/', '_self');
			}}
		>
			<img src="/images/logo.png" class="h-10" />
		</div>

		<PageButton name="Dictionary" src="pages/dict" />
		<PageButton name="Handbook" src="pages/handbook" />
	</div>
</header>

<div class="justify-center m-auto relative flex flex-col">
	<slot />
</div>
