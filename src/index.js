const express = require('express');
const { path } = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const { url } = require('inspector');

// App
const app = express();

// Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'))

// HTTP logger
app.use(morgan('combined'));

console.log('Here we go: ', path.join(__dirname, "assets"))

// Port
const port = 3001;

app.get('/', (req, res) => {
    return res.render('home');
})

app.listen(port, () => console.log(`App listen on ${port}`));