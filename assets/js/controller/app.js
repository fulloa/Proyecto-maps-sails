var app = angular.module('myApp', ['uiGmapgoogle-maps','ngRoute','ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when("/user", {
        templateUrl: "assets/templates/viewUser.html",
        controller: "userController"
    })
     .when("/admin/usuarios", {
        templateUrl: "assets/templates/mostrarUsuarios.html",
        controller: "showController"
    })
     .when("/admin/ambulancias", {
        templateUrl: "assets/templates/viewAdmin.html",
        controller: "adminController"
    })
    .otherwise({ redirectTo : "/admin"});



    
}]);