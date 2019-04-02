'use strict';
const express = require('express');
const app = express();
const port = 3000;

const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const logger = winston.createLogger({
      level: 'debug',
      format: format.combine(
      format.timestamp(),
      format.json()
      ),
    transports: [new transports.File({
        filename: 'app.log',
        'timestamp': true
    })]
});

function isAuthenticated(req, res, next)
{
    let auth = false;

    if(auth)
    {
        logger.log('info', 'auth');
        return next();
    }

    logger.warn('not auth');
    res.redirect('/');
}

app.get('/', (req, res) => res.send("hello world"));
app.get('/secret', isAuthenticated, function(req, res) { res.send('daka daka daka')
;});

app.listen(port, () => console.log('Example app listening on port ${port}'));
