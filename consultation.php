<?php
$to      = 'gp12021999@gmail.com';
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
     "Имя, фамилия: $fio\r\n
     Дата рождения: $birthday\r\n
     Время рождения: $time\r\n
     Место рождения: $place\r\n
     Телефон для связи: $phone\r\n
     Образование: $education\r\n
     Профессия: $career\r\n
     Хобби: $hobby\r\n
     Семейное положение: $family\r\n
     Обращался ли к астрологам\эзотерикам: $space\r\n
     Какие запросы есть: $wish\r\n
     Что тревожит больше всего: $q1\r\n
     Что есть сейчас по этим сферам: $q2\r\n
     Ожидания от общения с астрологом: $q3\r\n"
);
?>