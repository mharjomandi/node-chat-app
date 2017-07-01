//

var socket = io();

socket.on('connect', function () {
  console.log('Connected to server <js>');

  // socket.emit('createMessage', {
  //   from: 'Andrew',
  //   text: 'Yup, that works for me. <js>'
  // });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server <js>');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
