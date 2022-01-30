//here a connecton instance of a websocket connection is created
let connect = new WebSocket("ws://localhost:8080/create");

//handles message received and populates field using Jquery
let appendMessage = function (message, sender) {
    let status = sender ? 'Sent at' : 'Received at';
    let contentBox = $('<div class="msg">' + status + ' <span class="date"></span>: <span class="content"></span> </div>');
    contentBox.find('.date').text(new Date().toLocaleTimeString());
    contentBox.find('.content').text(message);
    $('#received').prepend(contentBox);
}
connect.onOpen = function(){
    // console.log('connection created');
    // setInterval(function () {
    //     connect.send('ping');
    // }, 60000);
}

// message is logged here
connect.onmessage = function (event){
    console.log('message created');
    appendMessage(event.data, false);
}

//Reconnect if connection is closed abruptly
connect.onclose = function(){
    // console.error(e);
    // clearInterval();
    // setInterval(function(){
    //     connect = new WebSocket('ws://localhost:8080/create');
    // }, 5000);
}


$(document).ready(function(){
    $('#submit').click(function(){
        let message = $('#message').val();
        if(message){
            console.log('sending message: " ' + message + ' " ');
            connect.send(message);
            appendMessage(message, true);
        }
    });
});