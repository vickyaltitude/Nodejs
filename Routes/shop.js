const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/shop',(req,res,next)=>{
 
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
})

router.get('/product-page', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'product-page.html'));
});

router.post('/product-page',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','product-page.html'));
})

module.exports = router;