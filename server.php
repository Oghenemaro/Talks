<?php

require_once 'vendor/autoload.php';

$app = new \Ratchet\App('localhost', $port, $address);
$app->route('/create', new shadow_chat\ChatArchitecture);
$app->route('/serve', new shadow_chat\HttpArchitecture, [ '*' ]);
$app->run();
?>