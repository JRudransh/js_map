// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, marker, infoWindow, long_c, lat_c, cords;

document.getElementById('button').addEventListener('click', initMap2)

function initMap2() {
  document.getElementById('hide').style.display = 'none';
  let map__ = document.getElementById("map");
  map__.style.display = 'block'
  lat_c = document.getElementById('lat');
  long_c = document.getElementById('long');
  lat = Number(lat_c.value)
  lng = Number(long_c.value)
  const myLatLng = {lat, lng};
  console.log(myLatLng);
  map = new google.maps.Map(map__, {
    center: myLatLng,
    zoom: 7,
  });
  marker = new google.maps.Marker({
    position: myLatLng,
    map
  });
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
