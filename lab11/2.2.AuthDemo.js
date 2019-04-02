const express = require('express');
const app = express();
const port = 3000;

function isAuthenticated(req, res, next)
{
      let auth = true;

      if(auth)
      {
          return next();
      }

      res.redirect('/');
}

app.get('/', (req, res) => res.send('hello world'));
app.get('/secret', isAuthenticated, function(req,res) { res.send('daka daka daka');
  });

app.listen(port, () => console.log('example app listening on port ${port}'));
