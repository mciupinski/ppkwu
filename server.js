var express = require('express');
var app = express();
var reverse = require('reverse-string');
var port = process.env.PORT || 8088;

app.get('/:text', function(req, res){
	res.send(reverse(req.params.text))}
);
app.listen(port, () => console.log('Example app listening on port 8088!'))