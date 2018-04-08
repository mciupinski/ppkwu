var express = require('express');
var app = express();
var validator = require('validator')
var port = process.env.PORT || 8088;

//https://github.com/chriso/validator.js - man
app.use(require('body-parser').json());

app.get('/:text', function(req, res){
	res.send(reverse(req.params.text))}
);
app.get('/', (request, response) => response.sendFile(path.join(__dirname+'\\index.html')));
app.post('/:type/:value*?', function(req, res){
	let name = req.body.name;
	let mail = req.body.mail;
	if (true){
		res.send("ok");
	}
	}
}
);

app.listen(port, () => console.log('Example app listening on port 8088!'))