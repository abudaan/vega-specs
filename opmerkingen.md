# Vega

Hieronder antwoorden op vragen van Richard en verder nog wat opmerkingen over dingen die ik tegengekomen ben tijdens het experimenteren met Vega.

## Webfonts

Je kunt webfonts gebruiken in een Vega spec. Het is ook mogelijk om met css de styling van een Vega spec aan te passen, maar dat kan alleen nadat de spec gerenderd is en als de svg renderer gebruikt wordt. Zie dit [testje](https://abudaan.github.io/vega-specs/2/).

## Labels bij de assen van een grafiek

Alles wat met svg kan is mogelijk.

## Animaties

Animaties zijn (nog) niet ingebouwd in Vega 3. In Vega 2 zijn animaties wel (beperkt) mogelijk. Zie de [porting guide](https://vega.github.io/vega/docs/porting-guide/#animation).

## Kaarten

Tile maps worden niet ondersteund, zie dit [issue](https://github.com/vega/vega/issues/899) op Github. In datzelfde issue wordt [leaflet-vega](https://github.com/nyurik/leaflet-vega) aangeraden. Deze library maakt van de Vega spec een layer in Leaflet. Dat werkt op zich goed maar niet alle functionaliteit van Leaflet is beschikbaar in de Vega layer, die moet nagemaakt worden in Vega,  bijvoorbeeld:

- Fit to bounds: heel handig om bijvoorbeeld in te zoomen op een bepaalde geografische entiteit (e. g. een buurt in Schiedam).

- Marker cluster: op basis van zoom nivo worden markers geclusterd en verschijnt er een bolletje met het aantal markers in dat cluster. Als je op een cluster klikt zie je de afzonderlijke markers (zie plaatje hieronder).

![marker cluster](https://raw.githubusercontent.com/abudaan/vega-specs/gh-pages/img/marker-cluster.jpg "marker cluster")

## Tooltips

In een Vega spec kun je standaard html tooltips gebruiken die mouseover verschijnen als je het `title` attribuut een van een html tag een waarde geeft. De opmaak hiervan is systeem-specifiek en kan niet aangepast worden.

In de officiële Vega repository op Github staat de [vega-tooltip plugin](https://github.com/vega/vega-tooltip); deze plugin wordt in de javascript runtime aan een Vega view gekoppeld en is dus geen onderdeel van de spec.

De plugin werkt overigens niet samen met leaflet-vega:

- [test met leaflet en native tooltips](https://abudaan.github.io/vega-specs/4/)
- [test met de tooltip plugin zonder leaflet](https://abudaan.github.io/vega-specs/3/)

## Meta data / administratie / context

### Client side

Om een spec te kunnen renderen in fffact moet er de volgende meta data aan een spec gekoppeld worden (bijvoorbeeld in de yaml file):

1. de mapping van interne naar externe signalen (zoals besproken, zie [hier](https://gist.github.com/abudaan/3f47a773a2bf4c923d81da23916775d5))
2. of de spec als layer in Leaflet gerenderd moet worden
3. of de spec gebruik maakt van `vega-tooltip` tooltips

### Server side

Als je specs op de server wilt genereren (een key feature van Vega) kun je kiezen om de spec from scratch te bouwen of gebruik te maken van templates.

Bekijk bijvoorbeeld dit stukje spec waar 2 data bronnen worden geparsed:

```javascript
    {
        name: 'informatie',
        url: 'data.json',
        format: {
            type: 'json',
        },
    },
    {
        name: 'buurten',
        url: 'buurten.topo.json',
        format: {
            type: 'topojson',
            feature: 'Gebieden', // bron specifiek
        },
        transform: [
            {
                type: 'geopath',
                projection: 'projection',
            },
            // hier worden de 3 velden 'vulling', 'meldingen' en 'stortingen' uit de bron 'informatie'
            // gekoppeld aan de bron 'buurten' via het gemeenschappelijke veld naam:
            // 'name' <=> 'properties.NAAM'
            {
                type: 'lookup',
                from: 'data',
                key: 'name', // bron specifiek
                fields: [
                    'properties.NAAM', // bron specifiek
                ],
                values: [
                    'vulling', // bron specifiek
                    'meldingen', // bron specifiek
                    'stortingen', // bron specifiek
                ],
            },
        ],
    },
```

Je ziet dat de juiste werking afhankelijk is van bron specifieke properties; als je van bovenstaande spec een template zou willen maken moet je dus de volgende dingen parametriseerbaar maken:

- de namen van de properties / velden
- welke velden van de ene bron aan de andere bron gekoppeld moeten worden (zie de array `values`).


## Overwegingen

Allereerst: Vega is een fantastische technologie! Maar ik begin me wel steeds meer af te vragen of het wel de beste keuze is voor dit project. Zoals boven beschreven moet er nogal wat extra functionaliteit in Vega gemaakt worden om bijvoorbeeld interactieve kaarten zoals bij de Schiedam tool te kunnen maken. Daarbij blijkt er om een spec goed te kunnen inpassen meer administratie nodig dan alleen de signal mapping.

Als we zouden kiezen voor een imperatieve oplossing, bijvoorbeeld D3, dan hebben we waarschijnlijk nog wat meer administratie nodig per visualisatie, maar deze kunnen we dan wel voor zowel de client als de server gebruiken.

Het grootste voordeel van D3 en Leaflet is dat de ontwikkeling van visualisaties veel (heel veel) sneller gaat en het daarnaast eenvoudig is om custom functionaliteit toe te voegen. Vega 3 is:

1. nog niet erg helder gedocumenteerd
2. erg lastig te debuggen
3. nog niet compleet qua feature set vergeleken met Vega 2
4. nog in bèta
5. lastig uitbreidbaar

Grootste nadeel van D3 is dat het niet naar canvas rendert en dus in sommige gevallen trager is dan Vega met canvas renderer, maar daar is wellicht een [oplossing](https://medium.freecodecamp.org/d3-and-canvas-in-3-steps-8505c8b27444) voor. Verder zou je bijvoorbeeld [infovis](http://philogb.github.io/jit/index.html) kunnen gebruiken of één van deze [alternatieven](https://www.slant.co/options/10577/alternatives/~d3-js-alternatives). Of natuurlijk flexibele aanpak waarbij je per visualisatie bekijkt welke library het beste werkt voor dat type visualisatie.

We kunnen uiteraard gewoon doorgaan met Vega, alleen duurt het allemaal wat langer. Zeker nu in het begin, wellicht dat het na een tijdje sneller gaat.