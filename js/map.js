'use strict';

//callbacks - Make one cb file, later, for login, bookFuncs, and map callbacks:
var L;

L.mapbox.accessToken = 'pk.eyJ1IjoiY3djcmFuZSIsImEiOiJjaWh2Mm40azkwMXg1dWhrbzF3Ym0zeDViIn0.FL1_nzSzdDNAfsZ4J3qKrA';

var map = L.mapbox.map('map', 'mapbox.streets', { zoomControl: false })
    .setView([42.36, -71.08], 13);
new L.Control.Zoom({ position: 'bottomright' }).addTo(map);

var layerGroup = L.layerGroup().addTo(map);

var addMarker = function(data) {
  for (var i=0; i<data.profiles.length; i++){
    var p = data.profiles[i];
    L.mapbox.featureLayer({
      // this feature is in the GeoJSON format: see geojson.org
      // for the full specification
      type: 'Feature',
      geometry: {
          type: 'Point',
          // coordinates here are in longitude, latitude order because
          // x, y is the standard for GeoJSON and many formats
          coordinates: [Number(p.longitude), Number(p.latitude)] //eg: [-71.143915, 42.337238]
      },
      properties: {
          title: (p.first_name + ' ' + p.last_name),
          description: p.address_street + '<br> Books: ' + p.books_count,
          // one can customize markers by adding simplestyle properties
          // https://www.mapbox.com/guides/an-open-platform/#simplestyle
          'marker-size': 'large',
          'marker-color': '#3bb2d0'
      }
    }).addTo(map).addTo(layerGroup);
  }
};

var bookLayerGroup = L.layerGroup().addTo(map);

var addBookMarker = function(data) {
  for (var i=0; i<data.books.length; i++){
    var b = data.books[i].book_owner;
    L.mapbox.featureLayer({
      // this feature is in the GeoJSON format: see geojson.org
      // for the full specification
      type: 'Feature',
      geometry: {
          type: 'Point',
          // coordinates here are in longitude, latitude order because
          // x, y is the standard for GeoJSON and many formats
          coordinates: [Number(b.longitude), Number(b.latitude)] //eg: [-71.143915, 42.337238]
      },
      properties: {
          title: (b.first_name + ' ' + b.last_name),
          description: b.address_street,
          // one can customize markers by adding simplestyle properties
          // https://www.mapbox.com/guides/an-open-platform/#simplestyle
          'marker-size': 'large',
          'marker-color': '#3bb2d0'
      }
    }).addTo(map).addTo(bookLayerGroup);
  }
};


var mapCBs = {
  all: function(error, data) {
    if (error) {
      console.log(error);
    }else {
      console.log(data);
      addMarker(data);
    }
  },
  search: function(error, data) {
    if (error) {
      console.log(error);
    }else {
      console.log(data);
      map.removeLayer(layerGroup);
      map.removeLayer(bookLayerGroup);
      addBookMarker(data);
      for (var i=0; i<data.books.length; i++){
        var b = data.books[i];
        $('#map-search-results').html('<li>'+ b.title + '</li>');
      };
    }
  }
};
