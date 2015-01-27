$(document).ready(function(){

  var server_name = 'http://127.0.0.1:3000';
  var socket = io.connect(server_name);

  console.log('Connecting to server ' + server_name);

  socket.on('tweet', function(data){
    $('#tweets').prepend('<li>' + 
      data.tweeter + ': ' + 
      data.tweet + '</li>');
    $('#love-progress div').css('width', data.love + '%').attr('aria-valuenow', data.love);
    $('#hate-progress div').css('width', data.hate + '%').attr('aria-valuenow', data.hate);
    $('#love').text(data.love + '%');
    $('#hate').text(data.hate + '%');
    $('#total').text(data.total);
  });
});
