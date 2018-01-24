const express = require('express'),
  app = express(),
  logger = require('log4js').getLogger(),
  onFinished = require('on-finished'),
  nuxtConfig = require('./nuxt.config.js'),
  { Nuxt, Builder } = require('nuxt')
const port = 3000
const nuxt = new Nuxt(nuxtConfig)

if (process.env.NODE_ENV === 'production') {
  logger.level = 'ALL'
} else if (process.env.NODE_ENV === 'development') {
  logger.level = 'DEBUG'
  nuxtConfig.dev = true
}

if (nuxtConfig.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use((req, res, next) => {
  onFinished(res, (err, res) => {
    logger.info(req.protocol+' '+req.method+' '+res.statusCode+' '+req.ip.replace('::ffff:', '')+' '+req.originalUrl)
  })
  next()
})

app.use(nuxt.render)

app.listen(port, function () {
  logger.info('Start Server. port: ' + port)
})

module.exports = app;
