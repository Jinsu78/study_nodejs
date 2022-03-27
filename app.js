const http = require('http');
const fs = require('fs');

var app = http.createServer((req, res) => {
    console.log('Server is connecting!');    
    res.end('test');
}).listen(4000);