const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const serverFunction = async (req,res) =>{

    let method = req.method
    if(req.url === '/'){
        try{
            const data =  await fsPromises.readFile(path.join(__dirname,'message.text'),"utf-8");
                res.write('<html>')
                res.write(`<body><p>${data}</p><form action="/message" method="POST"><input type ="text" name="message"><button>Send</button></form></body>`);
                res.write('</html>')
                return res.end();
            
        }catch(err){
            res.write('<html>')
            res.write(`<body><p>Unexpected error occured</p></body>`);
            res.write('</html>')
            return res.end();
        }
      
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

}

module.exports = {
    handler : serverFunction
}