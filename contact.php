<?php
$to      = 'astrologpolshchikova@gmail.com';
$subject = 'Письмо от клиента';
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
mail(
    $to,
    $subject,

    "Имя потенциального клиента: $name\r\n
     Его номер: $email\r\n
     Тема разговора: $message\r\n "
);
?>