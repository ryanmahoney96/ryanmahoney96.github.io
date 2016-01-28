

var safe = 'https://www.zipcodeapi.com/rest/ZtNBtXVrOHxhei1EXjXTgwGPrEBZf8DfCqQ6oMxdt4uHnvmlPjf6QVVhzxhPGU4i/radius.json/';
//<format>/<zip_code>/<distance>/<units>

function getRadius(zip, radius) {
	
	safe += zip + "/" + radius + "/mile";
	
	console.log(safe);
	console.log(safe.zip_codes.length);
	
	$.ajax({
		
		url: safe,
		
		jsonp: "callback",
		dataType: "jsonp",
		
		cache:false,
		
		success: function(response){
			/*
			console.log("success");
			
			var zipList = [];
	
			for(var i = 0; i < response.zip_codes.length; i++){
				console.log("56");
				zipList.push(response.zip_codes[i]);
			}
			*/
			console.log("in succces block");
		},
		
		error: function (response){
			if(response.status == 200){
				console.log("success");
				console.log(response.length);
				var zipList = [];
	
				for(var i = 0; i < response.zip_codes.length; i++){
					console.log("56");
					zipList.push(response.zip_codes[i]);
				}
			}
			else {
				console.log("Response: " + response);
			}
		}
	});
}





