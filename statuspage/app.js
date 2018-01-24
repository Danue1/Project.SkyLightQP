const app = require('express')()
const logger = require('log4js').getLogger()
const onFinished = require('on-finished')
const { Nuxt, Builder } = require('nuxt')

const nuxtConfig = require('./nuxt.config')

if (process.env.NODE_ENV === 'production') {
  logger.level = 'ALL'
} else if (process.env.NODE_ENV === 'development') {
  logger.level = 'DEBUG'
  nuxtConfig.dev = true
}

const nuxt = new Nuxt(nuxtConfig)

(nuxtConfig.dev) && new Builder(nuxt).build()

app.use((req, res, next) => {
  onFinished(res, (err, { statusCode }) => {
    const { protocol, method, ip, originalUrl } = req
    const IP = ip.replace('::ffff:', '')

    const message = [protocol, method, statusCode, IP, originalUrl].join(' ')
    logger.info(message)
  })

  next()
})

app.use(nuxt.render)

const port = 3000
app.listen(port, () => logger.info(`Start Server. port: ${ port }`))

module.exports = app
