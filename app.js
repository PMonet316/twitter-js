const express = require( 'express' );
const app = express(); // creates an instance of an express application
const port = 3000;

app.use(function(req,res,next){
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use('/special/', function(req,res,next){
    console.log('you reached the special area');
    next();
});

app.get('/',(req,res) => res.send('Welcome'));

app.listen(port, function() {console.log('server listening')});