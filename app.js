const express = require('express');
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application
const port = 3000;

// nunjucks
// app.set('view engine','html')
// app.engine('html', nunjucks.renderFile);
// nunjucks.configure('views');

// in some file that is in the root directory of our application... how about app.js?
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});


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