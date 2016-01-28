

	var http = require("http");
	var express = require("express");
	
	var app = express();
	
	app.use(function(req,res,next){
		console.log("Method:" + req.method + " URL:" + req.url);
		next();
	});
	
	app.use(express.static("./public"));
	
	app.listen(3000);