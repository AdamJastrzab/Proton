
        function initMap() {
  var myLatLng = {lat: 52.246825, lng: 20.790510};
  var mapCenter = {lat: 52.246825, lng: 20.870510};

  var map = new google.maps.Map(document.getElementById('contact-map'), {
    zoom: 10,
    center: mapCenter
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Studio Pro-Ton Krzysztof Jastrząb, Koczargi Nowe, ul. Wiosenna 8'
  });
}
