

var safe = 'https://www.zipcodeapi.com/rest/ZtNBtXVrOHxhei1EXjXTgwGPrEBZf8DfCqQ6oMxdt4uHnvmlPjf6QVVhzxhPGU4i/radius.json/';
//<format>/<zip_code>/<distance>/<units>

function foo(response) {
	console.log(response);
}

function getRadius(zip, radius) {
	
	safe = "https://www.zipcodeapi.com/rest/js-4S7WxgmVUhhcBKwZSDwLbTi8Wxw7FlIJdPGL52G0jYdVJJVBnrnylFHhdepSz7CN/radius.json/" + zip + "/" + radius + "/mile";

	console.log(safe);
	
	$.getJSON(safe, function(result){
        console.log(result);
		
		var firebaseRef = new Firebase  ("https://providerprofiles.firebaseio.com/");
		
		var zipList = [];
		var providerList = [];
		var keyArr = [];
	
		for(var i = 0; i < result.zip_codes.length; i++){
			console.log("56");
			zipList.push(result.zip_codes[i]);
		}
		
		firebaseRef.orderByKey().once('value', function(snapshot){
			snapshot.forEach(function(childSnapshot){
				for(var x = 0; x < zipList.length; x++){
					console.log("inloop");
					console.log(childSnapshot.key());
					if(childSnapshot.key() == zipList[x].zip_code){
						keyArr.push(childSnapshot.key());
						continue;
					}
				}
			});
			
			for(var u = 0; u < keyArr.length; u++){
				var childRef = new Firebase  ("https://providerprofiles.firebaseio.com/" + keyArr[u]);
				childRef.orderByKey().once('value', function(snapshot){
					snapshot.forEach(function(childSnapshot){
						console.log("iniffor");
						providerList.push(childSnapshot.val());
					});
				});
			}
			
			for(var t = 0; t < providerList.length; t++ ){
				for(var y = 0; y < providerList[t].length; y++){

					var provider = providerList[t][y];
					
					var providerLi = $("<li>Name:" + provider.name + ", \n Service:" + provider.service + " " + "</li>");
					
					providerLi.attr("id", provider + t);
				

					var serviceList = $("#serviceList");
						console.log("here");
					serviceList.append(providerLi);
					
					
					var emailButton = document.createElement("button");
					var btnText = document.createTextNode("Email" + provider.email);

					emailButton.appendChild(btnText);
					$("#" + provider + t).append(emailButton);
					
					emailButton.addEventListener("click", function(){
						console.log("emailPressed");
										
						var sendTo = provider.email;
						console.log(sendTo);
						
						window.open('mailto:' + sendTo + '?subject=I am interested in your RvrsBoard Post &body= Hi' + provider.name + ', \n');
			
					});
				}
			}
		});
				
		
		
    });

	
	// $.ajax({
		
		// url: safe,
		
		// //jsonp: "callback",
		// dataType: "jsonp",
		
		// //cache:false,
		
		// success: function(response){
			
			// console.log("success");
			
			// var zipList = [];
	
			// for(var i = 0; i < response.zip_codes.length; i++){
				// console.log("56");
				// zipList.push(response.zip_codes[i]);
			// }
			
			// console.log("in succces block");
		// },
		
		// error: function (response){
			// if(response.status == 200){
				// console.log("success");
				// console.log(response.length);
				// var zipList = [];
	
				// for(var i = 0; i < response.zip_codes.length; i++){
					// console.log("56");
					// zipList.push(response.zip_codes[i]);
				// }
			// }
			// else {
				// console.log("Response: " + response);
			// }
		// }
		
	// });
}





