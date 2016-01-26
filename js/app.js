var sykes = angular.module('sykes', ['ngRoute']);

sykes.config(['$routeProvider', function ($routeProvider){	
	$routeProvider.
	when('/viewCR',{
		templateUrl: "partials/table.html",
		controller: "CRCtrl"
	}).
	when('/addCR',{
		templateUrl: "partials/createCR.html",
		controller: "CRCtrl"
	}).
	when('/main',{
		templateUrl: "partials/main.html",
		controller:"defaultCtrl"
	}).
	otherwise({
		redirectTo: "/"
	});
}]);

sykes.controller('sideBarController', function ($scope) {
	$scope.items = [
		{"id":1,"name":"Main","link":"/main","icon":"icon-bar-chart"},
		{"id":2,"name":"view CR","link":"/viewCR","icon":"icon-align-justify"},
		{"id":3,"name":"Add CR","link":"/addCR","icon":"icon-calendar"}
	];
});


sykes.controller('defaultCtrl', function ($scope){

});

sykes.controller('CRCtrl', function ($scope){
	$scope.fecha = new Date("2016/01/31");
	$scope.fecha2 = new Date();
	$("date01").datepicker({
    	format: 'mm/dd/yyyy',
    	startDate: '-3d'
	});
});