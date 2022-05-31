<?php

use shadow_chat\ChatArchitecture;
use shadow_chat\DbConnect;
require_once 'vendor/autoload.php';

//create a server through the ratchet library
$app = new \Ratchet\App('localhost', 8080, '0.0.0.0');
$db = new DbConnect();
// var_dump($db->connect());
var_dump($db->createUser());

//chat engine route *not working*
$app->route('/create', new shadow_chat\ChatArchitecture);
$app->run();
?>