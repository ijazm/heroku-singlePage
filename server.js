var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get("/", function(req,res) {
    res.end("<html><head></head><body><p>Hello world I am single node js app</p></body></html>");
})

var server = app.listen(process.env.PORT || 8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at /%s:%s", host, port)

})
