
//const reqHandler = require('./routes'); //not used

const rootDir = require('./util/path');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

//app.set is used to set the globalc configuration or data that can be retrieved usineg app.get
//for using view engines, we will make use of reservered setting "view engine" to register our view engine and views to set the location of view templates
app.set('view engine', 'pug');
app.set('views', 'views') // used to specify where to find templates, by defauly its views folder - in case you are using a different path - make use of this setting
// does the body parsing of the request sent throught a form
app.use(bodyParser.urlencoded({extended: false}));

//Allows serving of static files - css 
app.use(express.static(path.join(rootDir,"public")));

//app.use method handled any method on http, to call precise get or post - make use of app.get or app.post
app.use('/admin',adminData.routes);
app.use(shopRoutes);

//handle any unmapped path - error in this case
app.use((req,res,next)=>{
    // to set hte status code alongwith response - 
    //res.status(404).send('<h1>Page not found</h1>');
    //res.status(404).sendFile(path.join(rootDir,"views", "404.html"));
    res.status(404).render('404');
});

app.listen(3000);


