
const rootDir = require('../util/path');
const adminData = require('./admin');
const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    console.log(adminData.products);

    // path method build the path in a way that is agnostic to operating systems - windows / linux etc.
    //res.sendFile(path.join(rootDir, "views", "shop.html"));

    const products = adminData.products;
    //res.render('shop', {prods: products}); //passing the products array to the template
    res.render('shop', {prods: products, docTitle: 'Shop'}); //passing additional data also to the template

});

module.exports = router;