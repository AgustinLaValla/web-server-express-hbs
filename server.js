const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static( __dirname + '/public' ));

//Express hbs engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',        
    });
});

app.listen(port, () => console.log('Esuchando peticiones en el puerto ' + port));