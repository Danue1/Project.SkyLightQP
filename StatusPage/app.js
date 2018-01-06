const express = require('express'),
    app = express(),
    path = require('path'),
    static = require("serve-static"),
    bodyParser = require('body-parser'),
    logger = require('log4js').getLogger(), 
    onFinished = require('on-finished'),

const port = 3001;

logger.level = 'ALL';

app.use(static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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