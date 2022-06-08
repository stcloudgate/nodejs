
//const reqHandler = require('./routes'); //not used

const rootDir = require('./util/path');
const adminroutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

// does the body parsing of the request sent throught a form
app.use(bodyParser.urlencoded({extended: false}));

//app.use method handled any method on http, to call precise get or post - make use of app.get or app.post
app.use('/admin',adminroutes);
app.use(shopRoutes);

//handle any unmapped path - error in this case
app.use((req,res,next)=>{
    // to set hte status code alongwith response - 
    //res.status(404).send('<h1>Page not found</h1>');
    res.status(404).sendFile(path.join(rootDir,"views", "404.html"));
});

app.listen(3000);


