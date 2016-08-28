app.controller('loginController', ['$scope', function($scope,$location){

	$scope.ingresar = function (user) {
		console.log(user);
		if (user.email === "admin@admin.com" && user.pass === "admin") {
			console.log("correcto");
		}
	}
}])