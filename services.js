myapp.service('cityService',function(){

	this.name = '';	
});

myapp.service('weatherService',['$resource',function($resource){

	var key = '5e8e1bcac9c52a4967de647dfb11b7d9';
	var wAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
	
	this.weatherFunc = function(cityName,days){

		return wAPI.get({q:cityName,cnt:days,APPID:key});
	}
}]);
