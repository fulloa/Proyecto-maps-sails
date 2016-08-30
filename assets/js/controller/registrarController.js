app.controller('registrarController', function($scope,$http) {
   $scope.newUser = {};

	$scope.addNewUser = function (user) {

		 $http.post('/registrar',{
		 	name: $scope.newUser.name,
		 	lastName: $scope.newUser.lastName,
		 	email: $scope.newUser.email,
		 	pass: $scope.newUser.pass
		 }).then(function onSuccess(){
		 		console.log('success')
		 		windows.location='/user';
		 }).catch(function onError (sailsResponse){
		 		console.log(sailsResponse);
		 }).finally(function anyWay(){
		 		console.log('Intente Registrar')
		 });
	}

	$scope.cancel = function (){
    	$scope.location.path("/");
    };
});