const express = require('express');
const app = express ();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3400;

/* app.get('^/$|/tipscalculator',(req,res)=>{
    res.sendFile(path.join(__dirname,'tipscalculator.html'))
}) */

app.use((req,res,next)=>{
    
    console.log('in the middleware')
    next()
})

app.use((req,res,next)=>{
 
    console.log('in another middleware');
    res.send('<h1>Hello world from express</h1>')
})

app.listen(PORT,() => console.log(`server running on port ${PORT}`));