<script lang="ts">
	import { FilterStaticType } from '../../data/types/FilterStaticType';
	import { FilterTypeEnums } from '../../data/enums/FilterTypeEnums';
	import TextFilter from './TextFilter.svelte';
	import ButtonFilter from './ButtonFilter.svelte';

	export let FilterData: FilterStaticType;
	export let FilterValue = '';
</script>

{#if FilterData.type == FilterTypeEnums.text}
	<TextFilter {FilterData} {FilterValue} />
{:else if FilterData.type == FilterTypeEnums.button}
	<ButtonFilter {FilterData} {FilterValue} />
{/if}
