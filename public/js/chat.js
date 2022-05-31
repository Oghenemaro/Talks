//here a connecton instance of a websocket connection is created
let connect = new WebSocket("ws://localhost:8080/create");

//handles message received and populates field using Jquery
let appendMessage = function (message, sender) {
    let status = sender ? 'Sent at' : 'Received at';
    let owner = $('<div class="msg_box"><div class="msg_content msg_content_owner"><span class="msg"></span><span class="date"></span></div> </div>');
    let recepient = $('<div class="msg_box msg_box_recipient"><div class="msg_content msg_content_recepient"><span class="msg"></span><span class="date"></span></div> </div>');
    let msgSender = (status === 'Sent at') ? owner : recepient;
    msgSender.find('.date').text(new Date().toLocaleTimeString());
    msgSender.find('.msg').text(message);
    $('#received').prepend(msgSender);
}
connect.onOpen = function(){
    console.log('connection created');
    setInterval(function () {
        connect.send('ping');
    }, 60000);
}

// message is logged here
connect.onmessage = function (event){
    console.log('message created' + event.data);
    appendMessage(event.data, false);
}

//Reconnect if connection is closed abruptly
connect.onclose = function(){
    console.log('connection closed');
    console.error(e);
    clearInterval();
    setInterval(function(){
        connect = new WebSocket('ws://localhost:8080/create');
    }, 5000);
}


$(document).ready(function(){
    $('#submit').click(function(){
        let message = $('#message').val();
        if(message){
            console.log('sending message: " ' + message + ' " ');
            connect.send(message);
            console.log(connect);
            appendMessage(message, true);
        }
    });
});