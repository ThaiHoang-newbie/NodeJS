const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes');
// App
const app = express();

// Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "resources/views")); 

// Static
app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan('combined'));

// Port
const port = 3001;


// Routes config
route(app);


app.listen(port, () => console.log(`App listen on ${port}`));