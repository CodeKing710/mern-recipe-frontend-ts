/**
 * Sets up the server for the client to use
 * All React component handlers are within the routes
 */

const express = require('express');
const app = express();
const methodOverride = require('method-override');

//App settings
app.set('view engine','jsx');
app.set('views','./views');
app.engine('jsx',require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('__m')); //Use "__m=[METHOD]" in query params

//Route Handlers
app.use('/', require('./routes/index'));

app.listen(3000);