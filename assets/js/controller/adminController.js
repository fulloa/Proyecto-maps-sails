
app.controller('adminController', ['$scope', function($scope){
	 //one initial marker

    var markersDisplayed = 0;
    var markersAdded = 0;
    var maxMarkersToDisplay = 3;
    var increment = 0.02;
    var startingLongitude = -71.611;
    var startingLatitude = -33.048;


  $scope.map = { 
		center: { 
			latitude: -33.048,
			longitude: -71.611	 
		}, 
		zoom: 12
	};
  $scope.markers = [];
    
    $scope.removeMarkers = function () {
        $scope.markers = [];
        markersDisplayed = 0;
        markersAdded = 0;
    }

    $scope.toggleAddAndRemoveMarkers = function () {

        //si ahi 3 markers en la posicion , saca el primero de ella
        // if(markersDisplayed >= 3) {
        //     markersDisplayed--;
        //     $scope.markers.shift();
        // }
        //agregar nueva posicion 
        markersDisplayed++;
        $scope.markers.push(
            {
                id: markersAdded,
                latitude: startingLatitude, 
                longitude: (startingLongitude + (markersAdded * increment))
            });
        markersAdded++;
        };

// 	var neighborhoods = [
//   {lat: -33.011, lng: -71.647},
//   {lat: -33.049, lng: -71.622},
//   {lat: -33.097, lng: -71.696},
//   {lat: -33.017, lng: -71.694}
// 	];

// // function initMap() {
// //   map = new google.maps.Map(document.getElementById('map'), {
// //     zoom: 12,
// //     center: {lat: -33.048, lng: -71.611}
// //   });
// // }


// $scope.drop = function () {
//   clearMarkers();
//   for (var i = 0; i < neighborhoods.length; i++) {
//     addMarkerWithTimeout(neighborhoods[i], i * 200);
//   }
// }

// $scope.addMarkerWithTimeout = function (position, timeout) {
//   window.setTimeout(function() {
//     markers.push(new google.maps.Marker({
//       position: position,
//       map: map,
//       animation: google.maps.Animation.DROP
//     }));
//   }, timeout);
// }

// $scope.clearMarkers = function () {
//   for (var i = 0; i < markers.length; i++) {
//     markers[i].setMap(null);
//   }
//   markers = [];
// }

}])