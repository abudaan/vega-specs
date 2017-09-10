<?php
require_once __DIR__.'/../vendor/autoload.php';
use Symfony\Component\HttpFoundation\Response;

$useTwig = getenv('TWIG') == 1;
error_log("[twig] $useTwig \n", 3, __DIR__.'/php.log');

$loader = new Twig_Loader_Filesystem( __DIR__.'/twig');
$twig = new Twig_Environment($loader, array(
    // 'cache' =>  __DIR__.'/./twig/cache',
    'autoescape' => false,
));

use Symfony\Component\Yaml\Parser;

$yaml = new Parser();

$app = new Silex\Application();

// statically serve javascript and css
$app->get('/assets/{file}', function ($file) use ($app) {
    error_log("[assets] $file \n", 3, __DIR__.'/php.log');
    // return $app->sendFile(__DIR__.'/assets/'.$file);
    $file = __DIR__.'/assets/'.$file;
    $stream = function () use ($file) {
        readfile($file);
    };
    $contentType;
    if (strpos($file, '.css') != False) {
        $contentType = 'text/css';
    } else if (strpos($file, '.js') != False) {
        $contentType = 'application/javascript';
    }
    return $app->stream($stream, 200, array('Content-Type' => $contentType));
});

$app->get('/{views}', function ($views) use ($app, $twig, $yaml) {
    $ids = explode('/', $views);
    $result = '';
    $i = 1;
    $specs = array();
    $runtimes = array();

    foreach($ids as $id){
        if($id != '') {
            $spec = file_get_contents(__DIR__.'/../specs/spec'.$id.'.json');
            if ($spec != null) {
                $spec = str_replace('\'', '\\"', $spec);
                $specs[] = json_decode($spec);
                $runtime = file_get_contents(__DIR__.'/../specs/runtime'.$id.'.yml');
                if ($runtime !== null) {
                    $runtimes[] = $yaml->parse($runtime);
                } else {
                    $runtimes[] = null;
                }
            }
        }
    }

    $config = array(
        'specs' => $specs,
        'runtimes' => $runtimes,
        'debug' => true,
        'element' => $element
    );

    return $twig->render('index.html', array('config' => json_encode($config)));
})
->assert('views', '.*');

return $app;
