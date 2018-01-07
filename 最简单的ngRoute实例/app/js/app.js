var app = angular.module('index',['ngRoute','controllerApp']);
app.config(function ($routeProvider) {
	$routeProvider.when('/hello',{
		templateUrl : 'tpls/hello.html',
		controller : 'helloCont'
	}).when('/list',{
		templateUrl : 'tpls/bookList.html',
		controller : 'bookListCont'
	}).otherwise({
		redirectTo : '/hello'
	});
})