const express = require('express');
const app = express ();
const PORT = process.env.PORT || 3400;
const bodyParser = require('body-parser');
const adminFile = require('./Routes/admin');
const shopFile = require('./Routes/shop');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));

/* app.get('^/$|/tipscalculator',(req,res)=>{
    res.sendFile(path.join(__dirname,'tipscalculator.html'))
}) */


app.use(adminFile);
app.use(shopFile);

app.get('/contact-us',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','contact-us.html'));
})


app.use('/',(req,res,next)=>{
    res.status(404).send("<h1>404 PAGE NOT FOUND</h1>")
})


app.listen(PORT,() => console.log(`server running on port ${PORT}`));