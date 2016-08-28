app.controller('cerrarSesionController', ['$scope','$uibModal',function($scope,$uibModal){	

	$scope.openModal = function (size){
	    var $uibModalInstance = $uibModal.open({
		    templateUrl: 'views/cerrarSesion.html',
		    controller: 'myModalController',
		    size: size,
		    resolve: {
		    	Items: function() //scope del modal
		        {
		          	
		        }
		    }
	    });
	}
}]);

app.controller('myModalController', ['$scope','$uibModalInstance','Items', function($scope, $uibModalInstance,Items){
    $scope.cancel = function () {
    	$uibModalInstance.dismiss('cancel');
    };
    	
	$scope.aceptar = function () {
		 console.log("Sesion Cerrada");
		 $uibModalInstance.close($scope.selected);
	}
}]);