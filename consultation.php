<?php
$to      = 'isafgor@gmail.com';
$subject = 'Заявка на консультацию';
$fio = $_POST['fio'];
$birthday = $_POST['birthday'];
$time = $_POST['time'];
$place = $_POST['place'];
$phone = $_POST['phone'];
$education = $_POST['education'];
$career = $_POST['career'];
$hobby = $_POST['hobby'];
$family = $_POST['family'];
$space = $_POST['space'];
$wish = $_POST['wish'];
$q1 = $_POST['q1'];
$q2 = $_POST['q2'];
$q3 = $_POST['q3'];

mail(
    $to,
    $subject,
    <html>
    <body>
    <p>'Имя потенциального клиента: '.$fio.</p>
    </body>
    </html>

    '. Его почта: '.$email.
    '. Его сообщение: '.$message
);
?>