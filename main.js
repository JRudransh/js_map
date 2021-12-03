// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, marker, infoWindow, long_c, lat_c, cords;
coords = { lat: 26.148043, lng: 91.731377 };
function initMap() {
  initMap2()
  document.getElementById('button').addEventListener('click', _initMap)
}

function _initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      cords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      // const myLatLng = { lat: 26.148043, lng: 91.731377 };
      const myLatLng = cords
      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: myLatLng,
      });

      lat_c = document.getElementById('lat');
      long_c = document.getElementById('long');
      lat_c.value = myLatLng.lat;
      long_c.value = myLatLng.lng;

      marker = new google.maps.Marker({
        position: myLatLng,
        map,
        // title: "Hello World!",
      });
    })
  }
}


function initMap2() {
  const myLatLng = coords;
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 7,
  });
  marker = new google.maps.Marker({
    position: myLatLng,
    map,
    // title: "Hello World!",
  });

  function addMarker(location, map) {
    new google.maps.Marker({
      position: location,
      map: map,
    });
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
