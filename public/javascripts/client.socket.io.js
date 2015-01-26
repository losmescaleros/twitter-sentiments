$(document).ready(function(){

  var server_name = 'http://127.0.0.1:3000';
  var socket = io.connect(server_name);

  console.log('Connecting to server ' + server_name);
 
  var $tweetList = $("#tweets");
  var $love = $("#love");
  var $hate = $("#hate");
  var $total = $("#total");

  socket.on('tweet', function(data){
    $tweetList.prepend('<li>' + 
      data.tweeter + ': ' + 
      data.tweet + '</li>');
    $love.text(data.love + '%');
    $hate.text(data.hate + '%');
    $total.text(data.total);
  });
});
