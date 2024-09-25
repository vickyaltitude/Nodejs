const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{
    let method = req.method
    if(req.url === '/'){
    res.write('<html>')
    res.write('<body><form action="/message" method="POST"><input type ="text" name="message"><button>Send</button></form></body>');
    res.write('</html>')
     return res.end();
    }
    if(req.url === '/home'){
        res.write('<html>')
        res.write('<body><h1>Welcome to Home Page</h1></body>');
        res.write('</html>')
         return res.end();
    }
    if(req.url === '/about'){
        res.write('<html>')
        res.write('<body><h1>Welcome to about us page</h1></body>');
        res.write('</html>')
         return res.end();
    }
    if(req.url === '/node'){
        res.write('<html>')
        res.write('<body><h1>Welcome to my node project</h1></body>');
        res.write('</html>')
         return res.end();
    }
    if(req.url === '/message' && method === 'POST'){
        let body = [];
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
      return  req.on('end',()=>{
            let parsedData = Buffer.concat(body).toString();
            let message = parsedData.split('=')[1]
            fs.writeFile('message.text',message,(err)=>{
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
           
        })
     
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<body><h1>My name is vignesh</h1></body>');
    res.write('</html>')
    res.end();
})

server.listen(3000);