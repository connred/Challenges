$(document).ready(function() {
    var socketServer = 'http://localhost:3000/';
    var socket = io.connect(socketServer);

    socket.on('echo', function(data) {
        console.log('socket echo = ' + JSON.stringify(data));
        $('#dht-display').text(data.t + "C, " + data.h + "%");
        $('#range-display').text(data.range);
    });
});