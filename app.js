const express = require( 'express' );
const app = express(); // creates an instance of an express application
const port = 3000;

app.get('/',(req,res) => res.send('Welcome'));

app.listen(port, function() {console.log('server listening')});