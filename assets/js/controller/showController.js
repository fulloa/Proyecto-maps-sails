app.controller('showController', ['$scope', function($scope){
	
	$scope.users = [
		{nombre: "nombre 1",
		apellido: "apellido 1",
		email: "email 1",
		pass: "pass 1"},

		{nombre: "nombre 2",
		apellido: "apellido 2",
		email: "email 2",
		pass: "pass 2"},

 		{nombre: "nombre 3",
		apellido: "apellido 3",
		email: "email 3",
		pass: "pass 3"},
	];

	$scope.editar = function (argument) {
		 console.log("Editando");
	}
 
 	$scope.eliminar = function (argument) {
 		 console.log("Eliminando");
 	}
}])