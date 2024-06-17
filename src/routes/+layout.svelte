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
<!--
<header class=" relative " style="flex: 0 1 50px">
	<div  class="  flex flex-row overflow-hidden">
		<div
			class="h-full  w-24  flex flex-row justify-center flex-wrap content-center hover:backdrop-brightness-110"
			on:click={() => {
				window.open('/', '_self');
			}}
		>
			<img src="/images/logo.png" class="h-10" />
		</div>

	</div>
</header>
>-->
<div class="  relative flex flex-col " style="flex: 1 1 auto">
	<slot />
</div>
