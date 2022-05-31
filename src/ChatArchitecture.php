<?php

namespace shadow_chat;
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class ChatArchitecture implements MessageComponentInterface{
    private $users;

    public function __construct(){
        $this->users = new \SplObjectStorage();
    }

    //creat connection and store according to user
    public function onOpen(ConnectionInterface $conn){
        echo "New User {$conn->remoteAddress} connected \n";
        $this->users->attach($conn);
    }

    //remove user along with connection instance
    public function onClose(ConnectionInterface $conn) {
        echo "User {$conn->remoteAddress} disconnected \n";
        $this->users->detach($conn);
    }

    //store message and send to user whose address is different from sender
    public function onMessage(ConnectionInterface $from, $msg){
        if($msg === 'ping'){
            return;
        }
        echo "received '$msg' from user {$from->remoteAddress}\n";
        foreach($this->users as $user) {
            if($user != $from){
                $user->send($msg);
            }
        }
    }
    public function onError(ConnectionInterface $conn, \Exception $err){}
}

?>