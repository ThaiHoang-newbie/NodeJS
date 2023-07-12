const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');

// App
const app = express();

// Template engine
app.engine('thaihoang', engine({
    extname : "thaihoang"
}));
app.set('view engine', 'thaihoang');
app.set('views', path.join(__dirname, "assets/views"));

// HTTP logger
app.use(morgan('combined'));

// Port
const port = 3001;


// Routes
app.get('/', (req, res) => {
    return res.render('home');
})
app.get('/news', (req, res) => {
    return res.render('news');
})

app.listen(port, () => console.log(`App listen on ${port}`));
