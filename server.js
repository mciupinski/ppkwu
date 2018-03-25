var express = require('express');
var app = express();
var port = process.env.PORT || 8088;


app.get('/:rev', function(req, res){
	res.send(request.params.rev.split("").reverse().join(""));
})
	app.listen(port, () => console.log('Example app listening on port 8088!'))