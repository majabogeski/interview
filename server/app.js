  var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  path = require("path"),
  morgan = require("morgan");
  movieRoutes = require('./routes/movies');
  app.use('/css',express.static(path.join(__dirname, '../client/css')));
  app.use('/js',express.static(path.join(__dirname, '../client/js')));
  app.use('/templates',express.static(path.join(__dirname, '../client/js/templates')));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(morgan('tiny'));
  app.use('/api/movies', movieRoutes);


  //on the bootom
  app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
  });

  app.listen(3000, function(){
    console.log("Server starting on port 3000");
  });
  