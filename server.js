var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    fs.readFile('index.html', function(err, data){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(data);
        return response.end();

    });
}).listen(8080, function(){
    console.log('listening to port 8080');
});