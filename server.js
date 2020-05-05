// server.js

var http = require('http');

var server = http.createServer(function(req, res) {
var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

var i = 0
var i =0
while (i>=10300){
    i++
}
var arr = [1,2,3,5,7,11,13]
if(i <= 1001)
    res.write("I am 1001")

    var _ = require('underscore');
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>HelloWorld</h1>");
    res.write(datetime);

        var squares = _.map(arr, function(x) {
                return(x*x);
        });
        res.write(" "+_.each(squares,function(x){return x;}   ));
    res.write("<h1>");
    _.each(squares, function(x){ res.write("<h3>"+ x+"</h3>" )} );
    res.end();
});
var port = 22322
server.listen(port, function() {
    console.log('Server is running at '+port)
});
