const express = require('express'),
    app = express(),
    logger = require('log4js').getLogger(),
    onFinished = require('on-finished'),
    nuxtConfig = require('./nuxt.config.js'),
    { Nuxt, Builder } = require('nuxt')
const port = 3001;

logger.level = 'ALL';

// Init Nuxt.js
const nuxt = new Nuxt(nuxtConfig)

// Build only in dev mode
if (nuxtConfig.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

app.use((req, res, next) => {
    onFinished(res, (err, res) => {
        logger.info(req.protocol+' '+req.method+' '+res.statusCode+' '+req.ip.replace('::ffff:', '')+' '+req.originalUrl);
    });
    next();
});

app.listen(port, function () {
    logger.info('Start server! PORT:' + port);
});

module.exports = app;
