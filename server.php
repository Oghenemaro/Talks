<?php

use shadow_chat\ChatArchitecture;
require_once 'vendor/autoload.php';

//create a server through the ratchet library
$app = new \Ratchet\App('localhost', 8080, '0.0.0.0');
//chat engine route
$app->route('/create', new shadow_chat\ChatArchitecture);
$app->run();
?>