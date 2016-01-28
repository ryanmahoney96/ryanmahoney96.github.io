

var BASE_URL = 'https://www.zipcodeapi.com/rest/ZtNBtXVrOHxhei1EXjXTgwGPrEBZf8DfCqQ6oMxdt4uHnvmlPjf6QVVhzxhPGU4i/radius.json/';
//<format>/<zip_code>/<distance>/<units>
var safe = '';

function getRadius(zip, radius) {
	
	safe = BASE_URL + zip + "/" + radius + "/mile";
	
	console.log(safe);
	
	
	$.ajax({
		
		url: "https://www.zipcodeapi.com/rest/ZtNBtXVrOHxhei1EXjXTgwGPrEBZf8DfCqQ6oMxdt4uHnvmlPjf6QVVhzxhPGU4i/radius.json/" + zip + "/" + radius + "/mile",
		jsonp: "callback",
		dataType: "jsonp",
		
		success: function(response){
			/*
			console.log("success");
			
			var zipList = [];
	
			for(var i = 0; i < response.zip_codes.length; i++){
				console.log("56");
				zipList.push(response.zip_codes[i]);
			}
			*/
			console.log("success");
			
		},
		
		error: function (response){
			console.log("Response: " + response);
		}
	});
}





