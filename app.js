var credentials = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY, 
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
};

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var server = require('http').createServer(app);
var port = 3000;
server.listen(port);
console.log("Socket.io server listening on 127.0.0.1:" + port);

var sio = require('socket.io').listen(server);
var twitter = require('twitter');

var t = new twitter(credentials);

var keywords = ['love', 'hate'];
var loveCount = 0;
var hateCount = 0;
var total = 0;

t.stream('statuses/filter', {track: keywords.join(',')}, function(stream){
    stream.on('data', function(tweet){
      if(tweet.text !== undefined){
        var text = tweet.text.toLowerCase();
        var shouldPrint = false;
        
        if(text.indexOf(keywords[0]) > -1){
          loveCount++;
	  total++;      
          shouldPrint = true;
        } 
        if(text.indexOf(keywords[1]) > -1){
          hateCount++;
	  total++;
          shouldPrint = true;
        }
        if(shouldPrint){
          var data = {
            tweet: tweet.text,
            tweeter: tweet.user.screen_name,
            love: Math.round(100 * loveCount / total),
            hate: Math.round(100 * hateCount / total),
            total: total
          };
          sio.sockets.emit('tweet', data);
          console.log(tweet.text);
        }
      }
    });

    stream.on('error', function(error, code){
      console.log("ERROR " + code + ": " + error);
    });
  });
  

sio.sockets.on('connection', function(socket){
  console.log('Web client connected');
  console.log("Connecting to Twitter stream...");

  socket.on('disconnect', function(){
    console.log('Web client disconnected');
  });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
