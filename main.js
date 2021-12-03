// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow, long_c, lat_c;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 26.148043, lng: 91.731377 },
    zoom: 5,
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
      labelOrigin: new google.maps.Point(75, 32),
      size: new google.maps.Size(32,32),
      anchor: new google.maps.Point(16,32)
    }
  });
  lat_c = document.getElementById('lat');
  long_c = document.getElementById('long');
  lat_c.value = 26.148043;
  long_c.value = 91.731377;

  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Update Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // console.log(pos);
          lat_c.value = pos.lat
          long_c.value = pos.lng

          infoWindow.setPosition(pos);
          infoWindow.setZoom(9)
          infoWindow.setContent({
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            labelOrigin: new google.maps.Point(75, 32),
            size: new google.maps.Size(32,32),
            anchor: new google.maps.Point(16,32)
          });
          infoWindow.open(map);
          map.setCenter(pos);
          // map.setZoom(9);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
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
