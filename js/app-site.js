var app = angular.module('siteTrust', [ 
    'ngMask', 
    'ngRoute',
    'ui.utils.masks',
    'ngStorage'
]);

/**
 * Define routes
 */
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/home', {
		templateUrl: 'pages/home.html'
	}).
	when('/consulta', {
		templateUrl: 'pages/fipe.html'
	}).
	when('/curriculo', {
		templateUrl: 'pages/cv.html'
	})
	.otherwise({
		redirectTo: '/home'
	});
}]);
