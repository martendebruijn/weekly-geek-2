require('dotenv').config();

const express = require('express'),
  router = require('./modules/router.js'),
  path = require('path'),
  compression = require('compression'),
  app = express();

const port = process.env.PORT || 3000;

app
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({ extended: true }))
  .use(compression())
  .set('views', __dirname + '/views/')
  .set('view engine', 'ejs')
  .get('/', router.home)
  .get('/hidde', router.hidde)
  .get('/sanne', router.sanne)
  .get('/funda', router.funda)
  .get('/cookies', router.cookies)
  .get('/debugging', router.debugging)
  .get('/aria', router.aria);

app.listen(port, () => console.log(`App listening on port ${port}`));
