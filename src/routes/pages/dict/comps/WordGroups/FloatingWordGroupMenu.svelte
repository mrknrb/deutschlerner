<script lang="ts">
	import FloatingMenu from '../FloatingMenu.svelte';
	import { FilterStore } from '../../apiClient/FilterStore/FilterStore';
	import TopButton from '../TopButton.svelte';
	import {
		WordGroupStore,
		WordGroupStoreCommands
	} from '../../apiClient/WordGroupStore/WordGroupStore';
</script>

<FloatingMenu
	showFloatingMenu={$WordGroupStore.wordGroupFloatingMenuVisible}
	on:menuClosed={() => {
		FilterStore.update((value) => {
			value.wordGroupFloatingMenuVisible = false;
			return value;
		});
	}}
	class="flex-col"
>
	<TopButton
		data={{
			name: 'Refresh',
			color: 'bg-blue-500',
			func: () => {
				WordGroupStoreCommands.getWordGroups();
			}
		}}
	/>

	<div class="overflow-auto  ">
		<table class="w-fit  table-fixed  border-separate">
			<thead
				class="  "
			>
				<th>
					{'id'}
				</th>
				<th class="w-72">
					{'words'}
				</th>
				<th class="w-72">
					{'text'}
				</th>
			</thead>
			{#each $WordGroupStore.wordGroups as wordgroup,i}
				<tr class="bg-gray-300 h-10  border-gray-600  border-b-4 align-top border-l-0  ">
					<td
						class="   ">
						{$WordGroupStore.wordGroups[i].id}

					</td>
					<td
						class="   ">

					{#each $WordGroupStore.wordGroups[i].words as words,u}
					<b  class="p-2 rounded bg-blue-500 m-1 break-words">	{$WordGroupStore.wordGroups[i].words[u].szo}</b>


					{/each}
				</td>
					<td
						class="   ">

					{#each $WordGroupStore.wordGroups[i].wordgroup_memos as memo,u}
						<b  class="p-2 rounded bg-blue-500 m-1 break-words">	{$WordGroupStore.wordGroups[i].wordgroup_memos[u].text}</b>


					{/each}
				</td>
				</tr>
			{/each}
		</table>
	</div>
</FloatingMenu>
