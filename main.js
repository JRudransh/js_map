// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, marker, infoWindow, long_c, lat_c, cords;

function initMap() {
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
        zoom: 7,
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


// function initMap() {
//   const myLatLng = { lat: 26.148043, lng: 91.731377 };
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: myLatLng,
//     zoom: 7,
//   });
//   marker = new google.maps.Marker({
//     position: myLatLng,
//     map,
//     // title: "Hello World!",
//   });

//   function addMarker(location, map) {
//     new google.maps.Marker({
//       position: location,
//       map: map,
//     });
//   }

//   lat_c = document.getElementById('lat');
//   long_c = document.getElementById('long');
//   lat_c.value = myLatLng.lat;
//   long_c.value = myLatLng.lng;

//   infoWindow = new google.maps.InfoWindow();

//   const locationButton = document.getElementById("button");
//   locationButton.addEventListener("click", () => {
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };

//           // console.log(pos);
//           lat_c.value = pos.lat
//           long_c.value = pos.lng
//           infoWindow.setPosition(pos);
//           infoWindow.setContent(null);
//           infoWindow.open(map);
//           map.setCenter(pos);
//           addMarker(pos, map)
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   });
// }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
