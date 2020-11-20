function initMap() {
  var map = new google.maps.Map(document.getElementById("rescue-map"), {
    zoom: 10,
    center: {
      lat: 53.4387125,
      lng: -2.2690649,
    },
  });



 var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

  var locations = [
    {
      lat: 53.4387125,
      lng: -2.2690649,
    },
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
