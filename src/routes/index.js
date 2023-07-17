const homeRouter = require('./home');
const newsRouter = require('./news');
const searchRouter = require('./search');

function route(app) {
    app.use('/home', homeRouter);
    app.use('/search', searchRouter);
    app.use('/news', newsRouter);
}

module.exports = route;
