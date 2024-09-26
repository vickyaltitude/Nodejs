const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
const PORT = process.env.port || 3300;
const fsPromise = require('fs').promises;
const path = require('path');
let userDetails,userMessage;

app.get('/',(req,res,next)=>{
    res.send('<html><form action="/textpage" method="POST"><input type="text" name="user"><button type="submit">login</button></form></html>');
})

app.post('/textpage',(req,res,next)=>{

    userDetails = Object.assign({}, req.body);
    

    res.send(`<html>
        <form action="/chatpage" method="POST">
        <input type="text" placeholder="Type your text here.." name="message" required>
        <button type="submit">Send Message</button>
        </form>
        </html>`);

  
})

app.post('/chatpage',async (req,res,next)=>{

    userMessage = Object.assign({}, req.body);
    console.log(userDetails);
    console.log(userMessage);

    await fsPromise.appendFile(path.join(__dirname,'groupChat.text'),`<h4>${userDetails.user} : ${userMessage.message}</h4> \n`)
   let texts =  await fsPromise.readFile(path.join(__dirname,'groupChat.text'),"utf8")
   console.log(texts)

    res.send(`<html>
        ${texts}
        <form action="/chatpage" method="POST">
        <input type="text" placeholder="Type your text here.." name="message">
        <button type="submit">Send Message</button>
        </form>
        </html>`);
})

app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`))