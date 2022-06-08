
const rootDir = require('../util/path');
const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

//  /admin/add-product ==> GET
router.get('/add-product',(req,res,next)=>{
    //console.log('in another middleware');
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

//  /admin/product ==> POST
router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;