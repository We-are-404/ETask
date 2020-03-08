var http = require('http');
var fs = require('fs')


http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});

    var pathname = req.url

    if(pathname === '/main.html') {
        fs.readFile('src/'+pathname, function(err, data) {
            if(err) console.log('404')
            else{
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
                res.end(data);
            }
        })
    }


    // res.end(pathname);



}).listen(8001);