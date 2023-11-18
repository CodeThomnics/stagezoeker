<script>
	import { onMount } from 'svelte';

	import Map from '$lib/Map.svelte';
	// import MapMarker from '$lib/MapMarker.svelte';
	import '../app.postcss';

	let loading = true;

	// async function fetchData() {
	// 	try {
	// 		const response = await fetch('http://localhost/api/internships/points');

	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			places.set(data);
	// 			loading = false;
	// 			return data;
	// 		}
	// 	} catch (error) {
	// 		loading = false;
	// 		throw new Error('Error');
	// 	}
	// }

	onMount(() => loading = false);
</script>

<main>
	<nav
		class="flex relative flex-wrap justify-between items-center py-3 w-full bg-purple-600 shadow-lg dark:bg-purple-800"
	>
		<div class="flex flex-wrap justify-between items-center px-6 w-full container-fluid">
			<div class="container-fluid">
				<a class="text-xl text-white" href="#">Stagezoeker</a>
			</div>
		</div>
	</nav>
	{#if !loading}
		<Map lat={51.943979} lon={6.124219} zoom={9}>
			<!-- <MapMarker lat={51.943979} lon={6.124219} label="Svelte Body Shaping"/>
      <MapMarker lat={37.8225} lon={-122.0024} label="Svelte Body Shaping"/>
      <MapMarker lat={33.8981} lon={-118.4169} label="Svelte Barbershop & Essentials"/>
      <MapMarker lat={29.7230} lon={-95.4189} label="Svelte Waxing Studio"/>
      <MapMarker lat={28.3378} lon={-81.3966} label="Svelte 30 Nutritional Consultants"/>
      <MapMarker lat={40.6483} lon={-74.0237} label="Svelte Brands LLC"/>
      <MapMarker lat={40.6986} lon={-74.4100} label="Svelte Medical Systems"/> -->
		</Map>
	{/if}
</main>
