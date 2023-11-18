<script>
	import { onDestroy, setContext, onMount } from 'svelte';
	import { mapbox, key } from './mapbox';
	import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
	import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
	import { places, filtered } from './stores';
	import Legend from './Legend.svelte';

	// import 'mapbox-gl/dist/mapbox-gl.css';
	// import mapboxgl from 'mapbox-gl';

	setContext(key, {
		getMap: () => map
	});

	export let lat;

	export let lon;

	export let zoom;

	let container;
	let map;
	let mapStyle;

	onMount(() => {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			mapStyle = 'mapbox://styles/mapbox/dark-v11?optimize=true';
		} else {
			mapStyle = 'mapbox://styles/mapbox/light-v11?optimize=true';
		}
		map = new mapbox.Map({
			container,
			// container,
			style: mapStyle,
			center: [lon, lat],
			zoom
		});
		map.on('style.load', () => {
			map.setFog({}); // Set the default atmosphere style
			// Add a GeoJSON source containing place coordinates and information.
			map.addSource('places', {
				type: 'geojson',
				data: $places
			});

			for (const feature of $places.features) {
				const symbol = feature.properties.icon;
				const layerID = feature.properties.id;

				// Add a layer for this symbol type if it hasn't been added already.
				if (!map.getLayer(layerID)) {
					map.addLayer({
						id: layerID,
						type: 'symbol',
						source: 'places',
						layout: {
							// These icons are a part of the Mapbox Light style.
							// To view all images available in a Mapbox style, open
							// the style in Mapbox Studio and click the "Images" tab.
							// To add a new image to the style at runtime see
							// https://docs.mapbox.com/mapbox-gl-js/example/add-image/
							'icon-image': `${symbol}`,
							'icon-size': 1.25,
							'icon-allow-overlap': true
						},
						filter: ['==', 'icon', symbol]
					});

					map.on('click', layerID, (e) => {
						// Copy coordinates array.
						const coordinates = e.features[0].geometry.coordinates.slice();
						const description = e.features[0].properties.description;
						const name = e.features[0].properties.name;

						// Ensure that if the map is zoomed out such that multiple
						// copies of the feature are visible, the popup appears
						// over the copy being pointed to.
						while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
							coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
						}

						map.flyTo({ center: coordinates });

						new mapbox.Popup()
							.setLngLat(coordinates)
							.setHTML(
								`
                <h1 class="text-base font-bold">${name}</h1>
                <br/>
                <p>${description}</p>
                `
							)
							.addTo(map);
					});

					// Change the cursor to a pointer when the mouse is over the places layer.
					map.on('mouseenter', layerID, () => {
						map.getCanvas().style.cursor = 'pointer';
					});

					// Change it back to a pointer when it leaves.
					map.on('mouseleave', layerID, () => {
						map.getCanvas().style.cursor = '';
					});
				}
			}
		});

		const geocoder = new MapboxGeocoder({
			accessToken: mapbox.accessToken,
			mapboxgl: mapbox,
			countries: 'nl',
			marker: null
		});

		map.addControl(geocoder);
	});

	onDestroy(() => {
		map.remove();
	});

    let filteredIDs = [];

	function onSearch() {
		filteredIDs = $filtered.map((feature) => feature.properties.id);

		let layerIDs = $places.features.map((feature) => feature.properties.id);

		if (filteredIDs.length !== 0) {
			// When the checkbox changes, update the visibility of the layer.
			for (const layerID of layerIDs) {
				map.setLayoutProperty(
					layerID,
					'visibility',
					filteredIDs.includes(layerID) ? 'visible' : 'none'
				);
			}
		} else {
			// When the checkbox changes, update the visibility of the layer.
			for (const layerID of layerIDs) {
				map.setLayoutProperty(layerID, 'visibility', 'visible');
			}
		}
	}
</script>

<div id="map" bind:this={container}>
	{#if map}
		<slot />
	{/if}
</div>

<Legend on:onSearch={onSearch}/>

<style>
#map {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
