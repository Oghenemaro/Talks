<?php

use shadow_chat\ChatArchitecture;
require_once 'vendor/autoload.php';

//allow us to connect to ratchet server via localhost/8080 
//or address/port added from command line through getopt fn
$options = getopt('1:p:', ['listen:', 'port:']);
$port = $options['port'] ?? $options['p'] ?? 8080;
$address = $options['listen'] ?? $options['1'] ?? '127.0.0.1';

$app = new \Ratchet\App('localhost', $port, $address);
$app->route('/create', new shadow_chat\ChatArchitecture);
$app->run();
?>