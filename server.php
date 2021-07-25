<?php 

// получаем JSON
$json = json_decode(file_get_contents('php://input'),true);
echo $json['email, phone'];

// объявляем переменные
$to = 'order@salesgenerator.pro';
$subject = '"заявка" Москвитин';
$message = $json;

// отправляем на почту
mail($to, $subject, $message);

// отправляем на amoSRM
$api_url = 'https://777belka777.amocrm.ru/'
$ch = curl_init($api_url);
$params = array($json);
$post_fields = http_build_query($params);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

?> 