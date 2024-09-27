const path = require('path');

exports.redirectToShop = (req,res,next)=>{
    
    res.redirect('/shop');
    
}

exports.getShopPage = (req,res,next)=>{
 
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
}

exports.getProductPage =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'product-page.html'));
}

exports.postProductPage = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','product-page.html'));
}