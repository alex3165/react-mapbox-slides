import mapboxgl from 'mapbox-gl';

const map = () => {

    mapboxgl.accessToken = 'ACCESS_TOKEN_HERE';

    var map = new mapboxgl.Map({
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-74.0066, 40.7135],
        zoom: 15,
        container: 'map'
    });

    map.on('load', function() {
        map.addLayer({
            'id': '3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': '#aaa',
                'fill-extrusion-height': {
                    'type': 'identity',
                    'property': 'height'
                },
                'fill-extrusion-base': {
                    'type': 'identity',
                    'property': 'min_height'
                },
                'fill-extrusion-opacity': .6
            }
        });
    });
}

export default map;
