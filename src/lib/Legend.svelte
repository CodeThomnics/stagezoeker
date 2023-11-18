<script>
	import { outflowFilter, sectorFilter } from './stores';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function onClick() {
        dispatch('onSearch');
    }
	let sectorFilters = [];
	let outflowProfileFilters = [];

	let outflow_profiles = ['Dagbesteding', 'Arbeid'];

	let sectors = ['Zorg en Welzijn', 'Dienstverlening', 'Productie', 'Horeca', 'Groen'];

	$: {
		$outflowFilter = outflowProfileFilters;
		$sectorFilter = sectorFilters;
	}
</script>

<div id="state-legend" class="legend">
	<h6 class="text-base">Zoek op:</h6>
	<div class="mt-2">
		<h4 class="text-sm">Uitstroomprofiel:</h4>
		{#each outflow_profiles as outflow_profile (outflow_profile)}
			<input
				type="checkbox"
				bind:group={outflowProfileFilters}
				name={outflow_profile}
				value={outflow_profile}
				id=""
			/><span class="mx-1">{outflow_profile}</span><br />
		{/each}
	</div>
	<div class="mt-2">
		<h4 class="text-sm">Sector:</h4>
		{#each sectors as sector (sector)}
			<input type="checkbox" bind:group={sectorFilters} name={sector} value={sector} id="" /><span
				class="mx-1">{sector}</span
			><br />
		{/each}
	</div>
	<div class="mt-2">
		<button
			on:click={onClick}
			class="w-full h-8 px-6 text-white transition-colors duration-150 bg-purple-600 rounded-lg hover:bg-purple-700 dark:bg-purple-800 dark:hover:bg-purple-900 focus:shadow-outline"
			>Zoek</button
		>
	</div>
</div>

<style lang="postcss">
	.legend {
		@apply absolute
      rounded
      bottom-8
      shadow
      text-xs
      p-3
      left-3
      z-[1]
      w-44
      sm:h-[40%]
      h-[45%]
      top-16
      bg-white
      dark:bg-zinc-900
      text-black
      dark:text-white;
		/* font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif; */
	}
</style>
