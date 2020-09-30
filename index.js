var express   = require('express');
var app       = express();
var fs        = require('fs');

app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/main'));

// Port setting
var port = 3000;
app.listen(port, function(){
  var dir = './uploadedFiles';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  console.log('server on! http://localhost:'+port);
});
