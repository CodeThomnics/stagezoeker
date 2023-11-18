import { writable, derived } from "svelte/store";


function applyFilter(data, sectorFilter, outflowFilter) {
    return data.filter(item => {
        return (
          outflowFilter.includes(item.properties.outflow_profile) ||
          sectorFilter.includes(item.properties.sector)
        );
      });
//   return data.filter(function (item) {
//       Object.keys(filter).every(key => {
//         console.log(filter[key]);
//         if (filter[key].length >= 1) {
//             return filter[key].includes(item.properties[key]);
//         }
//         return false;
//       });
//   });
}

// DUMMY DATA
export let places = writable({
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: "1",
        name: "Rijnstate Zevenaar",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum quam sollicitudin iaculis accumsan. Nunc ac arcu lobortis, laoreet est quis, rhoncus odio. Morbi ac quam non dui aliquet consectetur. Mauris in hendrerit purus. Duis sem turpis, interdum sed nunc ac, sodales pellentesque sapien. Vestibulum ac scelerisque est. Etiam eget sem laoreet, scelerisque nibh in, pellentesque nisl. In at porta diam. Nam sit amet blandit eros. Maecenas et urna rhoncus, porta leo sit amet, viverra risus. Cras placerat libero est, ut interdum ex gravida vel. In imperdiet metus arcu, nec rutrum justo dignissim in. Vivamus nibh tellus, sollicitudin porta hendrerit id, eleifend sit amet augue.",
        email: "deboer.zoe@vanbeek.com",
        url: "https://www.rijnstate.nl",
        street: "Hunneveldweg",
        house_number: "14a",
        zipcode: "6903 ZN",
        city: "Zevenaar",
        phone_number: "088 005 8887",
        sector: "Zorg en Welzijn",
        outflow_profile: "Arbeid",
        icon: "hospital",
      },
      geometry: {
        type: "Point",
        coordinates: [6.0687251, 51.9424363],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "2",
        name: "Borchuus",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum quam sollicitudin iaculis accumsan. Nunc ac arcu lobortis, laoreet est quis, rhoncus odio. Morbi ac quam non dui aliquet consectetur. Mauris in hendrerit purus. Duis sem turpis, interdum sed nunc ac, sodales pellentesque sapien. Vestibulum ac scelerisque est. Etiam eget sem laoreet, scelerisque nibh in, pellentesque nisl. In at porta diam. Nam sit amet blandit eros. Maecenas et urna rhoncus, porta leo sit amet, viverra risus. Cras placerat libero est, ut interdum ex gravida vel. In imperdiet metus arcu, nec rutrum justo dignissim in. Vivamus nibh tellus, sollicitudin porta hendrerit id, eleifend sit amet augue.",
        email: "team.wakerkplein3@estinea.nl",
        url: "https://www.estinea.nl/estinea-bij-jou-in-de-buurt/borchuus.aspx",
        street: "Kerkplein",
        house_number: "3",
        zipcode: "7051 CX",
        city: "Varsseveld",
        phone_number: "088 4950591",
        sector: "Dienstverlening",
        outflow_profile: "Dagbesteding",
        icon: "suitcase",
      },
      geometry: {
        type: "Point",
        coordinates: [6.4626195, 51.9438038],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "3",
        name: "De Voorwerkers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum quam sollicitudin iaculis accumsan. Nunc ac arcu lobortis, laoreet est quis, rhoncus odio. Morbi ac quam non dui aliquet consectetur. Mauris in hendrerit purus. Duis sem turpis, interdum sed nunc ac, sodales pellentesque sapien. Vestibulum ac scelerisque est. Etiam eget sem laoreet, scelerisque nibh in, pellentesque nisl. In at porta diam. Nam sit amet blandit eros. Maecenas et urna rhoncus, porta leo sit amet, viverra risus. Cras placerat libero est, ut interdum ex gravida vel. In imperdiet metus arcu, nec rutrum justo dignissim in. Vivamus nibh tellus, sollicitudin porta hendrerit id, eleifend sit amet augue.",
        email: "dossantos.faye@vandeven.net",
        url: "https://www.rijnstate.nl",
        street: "Leemansweg",
        house_number: "22",
        zipcode: "6827 BX",
        city: "Arnhem",
        phone_number: "026 382 4521",
        sector: "Productie",
        outflow_profile: "Arbeid",
        icon: "hardware",
      },
      geometry: {
        type: "Point",
        coordinates: [5.9479408, 51.9736835],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "4",
        name: "De Verse Kers",
        description:
          'Midden in de Wehlse Broeklanden, op de hoger gelegen es aan de rand van Wehl, is ons bedrijf gevestigd. Van oudsher een gemengd bedrijf met varkens en melkkoeien. Eind jaren \'90 hebben we ons geheel gericht op de varkenshouderij. Zonder melkkoeien vonden wij de weides wel erg leeg, dus zijn we in 2005 hobbymatig mini Dexterkoeien gaan houden. Sinds 2006 is de kersenteelt er als nieuwe professionele uitdaging bijgekomen en dat is in een korte tijd uitgegroeid tot 1,5 ha zoete kersen.\\n\\nNa al langer met de gedachte gespeeld te hebben om meer eigen producten en streekproducten te gaan verkopen, zijn we zomer 2014 gestart met de bouw van een Landwinkel. Van daaruit proberen we onze kennis van en passie voor "het plattelandsleven" op onze klanten over te brengen.\\nNajaar 2020 hebben we de oude stallen gesloopt. Twee stallen zijn blijven staan voor de varkens, die worden omgebouwd naar strohokken met buiten uitloop. Het aantal varkens dat we nu houden is voldoende voor de vleesverkoop in onze eigen winkel.\\nEen hele verandering, vooral ook voor Nico. 25 Jaar lang heeft hij op grotere schaal varkens gehouden in deze stallen. En nu (2021) een omschakeling, niet omdat het oude niet goed was, maar omdat de stallen versleten waren en we een nieuwe weg wilden inslaan.\\nOmdat we inkomsten uit de landwinkel hebben, hebben we ook de mogelijkheid om kleinschalig varkens te gaan houden. De lijnen zijn kort, zodat we er wat aan kunnen verdienen. De varkens worden, evenals onze Dexter runderen, 2 dorpen verderop geslacht. Het vlees komt de week erop verpakt en ingevroren terug en wordt in de vrieswand in de winkel gepresenteerd. Het voer (o.a. oud brood, overgebleven groente en fruit uit onze winkel) komt uit de regio. Het varken is het ultieme kringloopdier, 95% van het rantsoen van varkens bestaat uit producten die de mens niet wil of kan verteren. Zo proberen we onze afvalstromen te recyclen.\\n\\nNico & Annemiek',
        email: "info@deversekers.nl",
        url: "http://www.deversekers.nl/",
        street: "Bleeksestraat",
        house_number: "2",
        zipcode: "7031 EL",
        city: "Wehl",
        phone_number: "06 50417071",
        sector: "Groen",
        outflow_profile: "Dagbesteding",
        icon: "garden",
      },
      geometry: {
        type: "Point",
        coordinates: [6.2209123, 51.959175],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "5",
        name: "Het Borghuis",
        description:
          "Het Borghuis-team bestaat uit ongeveer 20 enthousiaste collega’s en kookt en serveert vanaf de opening in mei 2000 (h)eerlijke gerechten. De menukaart verandert regelmatig. Je proeft hier dus steeds weer wat nieuws. Kom het zelf ervaren. Je bent van harte welkom in het Borghuis; een restaurant waar je mag zijn wie je bent.",
        email: "info@hetborghuis.nl",
        url: "https://hetborghuis.nl/",
        street: "Burg. van Nispenstraat",
        house_number: "4",
        zipcode: "7001 BS",
        city: "Doetinchem",
        phone_number: "0314 366168",
        sector: "Horeca",
        outflow_profile: "Dagbesteding",
        icon: "bar",
      },
      geometry: {
        type: "Point",
        coordinates: [6.2874278, 51.9672314],
      },
    },
  ],
});

// For fetching real data
// export let places = writable({
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       properties: {
//         id: "1",
//         icon: "college",
//       },
//       geometry: {
//         type: "Point",
//         coordinates: [6.124219, 51.943979],
//       },
//     },

//   ],
// });

export let sectorFilter = writable([]);
export let outflowFilter = writable([]);  

export let filtered = derived([places, sectorFilter, outflowFilter], ([$places, $sectorFilter, $outflowFilter]) =>
  applyFilter($places.features, $sectorFilter, $outflowFilter)
);