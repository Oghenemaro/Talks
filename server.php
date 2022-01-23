<?php

use shadow_chat\ChatArchitecture;
require_once 'vendor/autoload.php';

$app = new \Ratchet\App('localhost', 8080, '0.0.0.0');
$app->route('/create', new shadow_chat\ChatArchitecture);
$app->run();
?>