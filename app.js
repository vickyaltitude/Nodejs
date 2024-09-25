const http = require('http');

const serverF = require('./serverFunction');

const server = http.createServer(serverF.handler)

server.listen(3000);