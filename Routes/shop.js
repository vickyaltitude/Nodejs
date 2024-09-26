const express = require('express');
const router = express.Router();

router.get('/product-page',(req,res,next)=>{
 
    res.send('<body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Get product</button></body>')
})

router.post('/product',(req,res,next)=>{
    res.send('<body>This is the product page</body>')
})

module.exports = router;