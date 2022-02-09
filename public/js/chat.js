//here a connecton instance of a websocket connection is created
var connect = new WebSocket("ws://localhost:8080/create");

//handles message received and populates field using Jquery
var appendMessage = function (message, sender) {
    var status = sender ? 'Sent at' : 'Received at';
    var contentBox = $('<div class="msg_box"><div class="msg_content"><span class="msg"></span><span class="date"></span></div> </div>');
    contentBox.find('.date').text(new Date().toLocaleTimeString());
    contentBox.find('.msg').text(message);
    $('#received').prepend(contentBox);
}
connect.onOpen = function(){
    console.log('connection created');
    // setInterval(function () {
    //     connect.send('ping');
    // }, 60000);
}

// message is logged here
connect.onmessage = function (event){
    console.log('message created' + event.data);
    appendMessage(event.data, false);
}

//Reconnect if connection is closed abruptly
connect.onclose = function(){
    console.log('connection closed');
    // console.error(e);
    // clearInterval();
    // setInterval(function(){
    //     connect = new WebSocket('ws://localhost:8080/create');
    // }, 5000);
}


$(document).ready(function(){
    $('#submit').click(function(){
        var message = $('#message').val();
        if(message){
            console.log('sending message: " ' + message + ' " ');
            connect.send(message);
            console.log(connect);
            appendMessage(message, true);
        }
    });
});