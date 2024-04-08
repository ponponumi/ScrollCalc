<?php

require_once __DIR__ . "/../vendor/autoload.php";


use Ponponumi\ViteLoader\ViteLoader;

$vite = new ViteLoader(__DIR__ . "/build/.vite/manifest.json", "/build/");

?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <progress id="progress" value="0" max="1"></progress>
