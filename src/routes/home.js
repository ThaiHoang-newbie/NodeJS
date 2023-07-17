var express = require('express');
const router = express.Router();

const homeRouter = require('../app/controllers/HomeController');

router.use('/', homeRouter.index);
module.exports = router;