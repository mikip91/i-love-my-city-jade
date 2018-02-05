var express = require('express');
var app = express();
var routes = require('./routes/route.js');

app.set('view engine','jade');
app.use(express.static(__dirname + '/public'));

app.get('/',routes.homeHandler);

app.get('/:city',routes.cityHandler);

var port = process.env.PORT || 8080;
var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});


