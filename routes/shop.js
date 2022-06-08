
const rootDir = require('../util/path');
const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    console.log('in last middleware');

    // path method build the path in a way that is agnostic to operating systems - windows / linux etc.
    res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;