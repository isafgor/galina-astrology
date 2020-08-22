<?php
$to      = 'isafgor@gmail.com';
$subject = 'Письмо от клиента';
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
mail(
    $to,
    $subject,
    'Имя потенциального клиента: '.$name.
    '. Его почта: '.$email.
    '. Тема разговора: '.$message
);
?>