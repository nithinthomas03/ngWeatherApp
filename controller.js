myapp.controller("homeController",["$scope",'cityService',function($scope,cityService){

 	$scope.cityName = cityService.name;

 	$scope.$watch('cityName',function(){
		cityService.name = $scope.cityName;
 	});
}]);

myapp.controller("forecastController",["$scope",'cityService','weatherService',function($scope,cityService,weatherService){

	var cnt = 7;
	$scope.cityName = cityService.name;
	$scope.wResult = weatherService.weatherFunc($scope.cityName,cnt);
	var wObj=$scope.wResult;
	console.log(wObj);
	//$scope.wIcon = $scope.wResult.list[0].weather[0].icon;
	//console.log($scope.wIcon);
	
	
	$scope.k2F = function(tempK){
		return Math.round((9/5*(tempK - 273)+32));
	}

	$scope.d2C = function(dateC){
		var dt = new Date(dateC*1000);
		return dt.toLocaleDateString([],{day: 'numeric',weekday:'short'});	
	}
}]);