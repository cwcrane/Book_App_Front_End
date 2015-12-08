'use strict';

//callbacks - Make one cb file, later, for login, bookFuncs, and map callbacks:

var mapCBs = {
  all: function(error, data) {
    if (error) {
      console.log(error);
    }else {
      console.log(data);
      for (var i=0; i<data.profiles.length; i++){
        addMarker(Number(data.profiles[i].longitude), Number(data.profiles[i].latitude));
      };
    }
  }
};

var L;

L.mapbox.accessToken = 'pk.eyJ1IjoiY3djcmFuZSIsImEiOiJjaWh2Mm40azkwMXg1dWhrbzF3Ym0zeDViIn0.FL1_nzSzdDNAfsZ4J3qKrA';

var map = L.mapbox.map('map', 'mapbox.streets', { zoomControl: false })
    .setView([42.36, -71.08], 13);
new L.Control.Zoom({ position: 'bottomright' }).addTo(map);

var addMarker = function(long, lat) {
  L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [long, lat] //eg: [-71.143915, 42.337238]
    },
    properties: {
        title: 'Peregrine Espresso',
        description: '1718 14th St NW, Washington, DC',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#3bb2d0'
    }
  }).addTo(map);
}


