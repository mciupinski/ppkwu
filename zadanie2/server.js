var express = require('express');
var app = express();
var validator = require('validator');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8088;

//https://github.com/chriso/validator.js - man
app.use(bodyParser.urlencoded({
  extended: true
}));

//app.get('/:text', function(req, res){
//	res.send(reverse(req.params.text))}
//);

app.get('/', (request, response) => response.sendFile(path.join(__dirname, '/index.html')));

app.post(':type/:value*?', function(req, res){
	var name = req.body.name;
	var email = req.body.mail;
	//if (true){
		res.send("ok");
	//}
	//}
}
);

app.listen(port, () => console.log('Example app listening on port 8088!'))