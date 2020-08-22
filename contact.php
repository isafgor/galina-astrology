<?php
$to      = 'gp12021999@gmail.com';
$subject = 'Письмо от клиента';
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
mail(
    $to,
    $subject,

    "Имя потенциального клиента: $name\r\n
     Его почта: $email\r\n
     Тема разговора: $message\r\n "
);
?>