//here a connecton instance of a websocket connection is created
var connect = new WebSocket("ws://localhost:8080/create");

//handles message received and populates field using Jquery
var appendMessage = function (message, sender) {
    var status = sender ? 'Sent at' : 'Received at';
    var contentBox = $('<div class="msg">' + status + ' <span class="date"></span>: <span class="content"></span> </div>');
    contentBox.find('.date').text(new Date().toLocaleTimeString());
    contentBox.find('.content').text(message);
    $('#received').prepend(contentBox);
}
connect.onOpen = function(){
    console.log('connection created');
}

// message is logged here
connect.onmessage = function (){
    console.log('message created')
    appendMessage(event.data, false);
}

connect.onclose = function(){
    console.log('connection closed');
}


$(document).ready(function(){
    $('#submit').click(function(){
        console.log('button active');
        var message = $('#message').val();
        if(message){
            console.log('sending message: " ' + message + ' " ');
            connect.send(message);
            appendMessage(message, true);
        }
    });
});