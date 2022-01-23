//here a connecton instance of a websocket is created
var connect = new WebSocket("ws://localhost:8080/ChatArchitecture");

var appendMessage = function (message, sender) {
    var status = sender ? 'Sent at' : 'Received at';
    var contentBox = $('<div class="msg">' + status + '<span class="date"></span>: <span class="content"></span> </div>');
    contentBox.find('.date').text(new Date().toLocaleTimeString);
    contentBox.find('content').text(message);
    $('#messages').prepend(html);
}
connect.onOpen = function(){
    console.log('connection created');
}

connect.onmessage = function (){
    console.log('message created')
    appendMessage(event.data, false);
}

connect.onclose = function(){
    console.log('connection closed');
}


$(document).ready(function(){
    $('#submit').click(function(){
        var message = $('message').val();
        if(message){
            console.log('sending message: " ' + message + ' " ');
            connection.send(message);

            appendMessage(message, true);
        }
    });
});