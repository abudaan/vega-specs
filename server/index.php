<?php
$filename = __DIR__.'/../' . $_SERVER['REQUEST_URI'];
// echo 'aap '.$file_name;
if (php_sapi_name() === 'cli-server' && is_file($filename)) {
    return false;
}

$app = require __DIR__.'/app.php';
$app->run();
