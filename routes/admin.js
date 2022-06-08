
const rootDir = require('../util/path');
const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');
const { syncBuiltinESMExports } = require('module');

const router = express.Router();
const products = [];
//  /admin/add-product ==> GET
router.get('/add-product',(req,res,next)=>{
    //console.log('in another middleware');
    //res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
});

//  /admin/product ==> POST
router.post('/add-product',(req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

//module.exports = router;
exports.routes = router;
exports.products = products;