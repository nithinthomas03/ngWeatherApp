myapp.controller("homeController",["$scope",'cityService',function($scope,cityService){

 	$scope.cityName = cityService.name;

 	$scope.$watch('cityName',function(){
		cityService.name = $scope.cityName;
 	});
}]);

myapp.controller("forecastController",["$scope",'cityService','weatherService',function($scope,cityService,weatherService){

	var cnt = 7;
	$scope.cityName = cityService.name;
	var wRes = weatherService.weatherFunc($scope.cityName,cnt).$promise.then(function(resp){
		$scope.wResult = resp;
		console.log($scope.wResult);
		$scope.wIcon = $scope.wResult.list[0].weather[0].icon;
	});

	
	$scope.k2F = function(tempK){
		return Math.round((9/5*(tempK - 273)+32));
	}

	$scope.d2C = function(dateC){
		var dt = new Date(dateC*1000);
		return dt.toLocaleDateString([],{day: 'numeric',weekday:'short'});	
	}
}]);