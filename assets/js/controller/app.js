var app = angular.module('myApp', ['uiGmapgoogle-maps','ngRoute','ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "views/viewLogin.html",
        controller: "loginController"
    })
     .when("/admin", {
        templateUrl: "views/viewAdmin.html",
        controller: "adminController"
    })
      .when("/user", {
        templateUrl: "views/viewUser.html",
        controller: "userController"
    })
    .when("/registrar", {
        templateUrl: "views/formulario_registro.html",
        controller: "registrarController"
    })
     .when("/admin/usuarios", {
        templateUrl: "views/mostrarUsuarios.html",
        controller: "showController"
    })
     .when("/admin/ambulancias", {
        templateUrl: "views/viewAdmin.html",
        controller: "adminController"
    })
    .otherwise({ redirectTo : "/"});



    
}]);