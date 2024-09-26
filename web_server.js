const express = require('express');
const app = express ();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3400;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

/* app.get('^/$|/tipscalculator',(req,res)=>{
    res.sendFile(path.join(__dirname,'tipscalculator.html'))
}) */


    app.use('/product-page',(req,res,next)=>{
 
        res.send('<body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Get product</button></body>')
    })

    app.use('/product',(req,res,next)=>{
        console.log(req.body)
        res.send('<body>This is the product page</body>')
    })

    app.use('/',(req,res,next)=>{
    
        res.send('<h1>This is home</h1>')
        
    })




app.listen(PORT,() => console.log(`server running on port ${PORT}`));