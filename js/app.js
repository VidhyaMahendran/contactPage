var contactApp = angular.module('contactApp', ['ngRoute']);

contactApp.controller('ContactController', function ($scope, $http) {
	$scope.currentYear = new Date().getFullYear();

	$scope.sapientBusinessUnits = {
		"name" : "Sapient",
		"units" : [
			"SapientNitro",
			"Sapient Global Market",
			"Sapient Market Services",
			"Sapient (m)PHASIZE"
		]
	};

	$scope.getCarouselData = function () {
		$http.get('json/carousel-data.json').
			then(function (response) {
				$scope.carouselData = response.data;
			}, function (response) {
				$scope.carouselData = "There is some error";
			});
	};

	$scope.getCarouselData();
});

contactApp.config(function ($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'partials/contact.html'
		}).
		when('/home', {
			templateUrl: 'partials/home.html'
		}).
		when('/about', {
			templateUrl: 'partials/about.html'
		}).
		when('/projects', {
			templateUrl: 'partials/projects.html'
		}).
		when('/contact', {
			templateUrl: 'partials/contact.html'
		}).
		otherwise({
			redirectTo: '/contact'
		});
});
