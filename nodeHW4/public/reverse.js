


var SAMPLE_POST_REVERSE = 'http://www.mapquestapi.com/geocoding/v1/reverse?key=ti1fVA2AhFy3UjK9z9Gr8cNBfTGobwgM';
var safe = '';
var userLatitude = "";
var userLongitude = "";

function doReverse() {
		
	safe = SAMPLE_POST_REVERSE;
	console.log(safe);

	getLocation();
	
	
};

function renderReverse(response) {
    console.log("wezer");
	
	var html = '';
    var i = 0;
    var j = 0;
	
	
	var location = response.results[0].locations[0];
	html = location.postalCode;
	console.log(html);
    
    //document.getElementById('reverseNarrative').innerHTML = html;
}

function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(setPosition, showError);
		console.log("in geo");
	}	
	else {
		alert("Geolocation not Supported");
	}
		
}	

function setPosition (position){
		
	userLatitude = position.coords.latitude;
	userLongitude = position.coords.longitude;
	
	console.log(userLatitude);
	
	safe += '&location=' + userLatitude + ',' + userLongitude;
	console.log(safe);
	
	$.ajax({
		
		url : safe,
		
		jsonp: "callback",
		dataType: "jsonp",
		
		success: function(response){
			console.log("success");
			
			var html = '';
			var i = 0;
			var j = 0;
			console.log(response);
			
			var location = response.results[0].locations[0];
			html = location.postalCode;
			console.log(html);
			
			$("#userLocation").val(html);
		},
		error: function (response){
			console.log("Response: " + response);
		}
	});
}
	

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.")
            break;
    }
}
	
	
	
	
