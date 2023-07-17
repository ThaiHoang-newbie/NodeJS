const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');

// App
const app = express();

// Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "assets/views")); 

// Static
app.use(express.static(path.join(__dirname, "assets/public")));

// HTTP logger
app.use(morgan('combined'));

// Port
const port = 3001;


// Routes (
// Syntax: app.method(PATH, HANDLER)
app.get('/', (req, res) => {
    return res.render('home');
})
app.get('/news', (req, res) => {
    return res.render('news');
})


app.listen(port, () => console.log(`App listen on ${port}`));