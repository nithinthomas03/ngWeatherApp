var myapp = angular.module("myapp",["ngRoute","ngResource"]);

myapp.config(function($routeProvider){
	$routeProvider
				.when('/',{
					templateUrl: 'pages/home.html',
					controller: 'homeController'
				})
				.when('/forecast',{
					templateUrl:'pages/forecast.html',
					controller:'forecastController'
				})
});

myapp.service('cityService',function(){

	this.name = '';	
});

myapp.controller("homeController",["$scope",'cityService',function($scope,cityService){

 	$scope.cityName = cityService.name;

 	$scope.$watch('cityName',function(){
		cityService.name = $scope.cityName;
 	});
}]);

myapp.controller("forecastController",["$scope",'$resource','cityService',function($scope,$resource,cityService){
	var key = '5e8e1bcac9c52a4967de647dfb11b7d9';
	$scope.cityName = cityService.name;
	var wAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
	$scope.wResult = wAPI.get({q:$scope.cityName,cnt:7,APPID:key});
	console.log($scope.wResult);
	
	$scope.k2F = function(tempK){
		return Math.round((9/5*(tempK - 273)+32));
	}
	$scope.d2C = function(dateC){
		var dt = new Date(dateC*1000);
		return dt.toLocaleDateString([],{day: 'numeric',weekday:'short'});
		
	}
}]);



