$(document).ready(function(){
    /*ПРОВЕРЯЕМ НАЖАТА ЛИ КНОПКА ОТПРАВКИ*/

    $('#send').click(function(){
        // собираем данные с формы
        let user_name    = $('#name').val();
        let user_email   = $('#email').val();
        let text_comment = $('#message').val();
        // отправляем данные
        $.ajax({
            url: "contact.php",
            type: "post",
            data: {
                "name":    user_name,
                "email":   user_email,
                "message": text_comment
            },
            error:function(){$("#erconts").html("Произошла ошибка!");},
            success: function (result) {
                /* В случае удачной обработки и отправки выполнится следующий код*/
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
                displayModal('modal2','flex');
            }
        });
    });

    $('#send-modal').click(function(){
        // собираем данные с формы
        let user_name    = $('#name-modal').val();
        let user_email   = $('#email-modal').val();
        let text_comment = $('#message-modal').val();
        // отправляем данные
        $.ajax({
            url: "contact.php",
            type: "post",
            data: {
                "name":    user_name,
                "email":   user_email,
                "message": text_comment
            },
            error:function(){$("#erconts").html("Произошла ошибка!");},
            success: function (result) {
                /* В случае удачной обработки и отправки выполнится следующий код*/
                $('#name-modal').val('');
                $('#email-modal').val('');
                $('#message-modal').val('');
                displayModal('modal2','flex');
            }
        });
    });

    $('#submit').click(function(){
        // собираем данные с формы
        let fio    = $('#fio').val();
        let birthday   = $('#birthday').val();
        let time   = $('#time').val();
        let place   = $('#place').val();
        let phone   = $('#phone').val();
        let education   = $('#education').val();
        let career   = $('#career').val();
        let hobby   = $('#hobby').val();
        let family   = $('#family').val();
        let space   = $('#space').val();
        let wish   = $('#wish').val();
        let q1   = $('#q1').val();
        let q2   = $('#q2').val();
        let q3   = $('#q3').val();
        // отправляем данные
        $.ajax({
            url: "contact.php",
            type: "post",
            data: {
                "fio":    fio,
                "birthday":   birthday,
                "place": place,
                "time": time,
                "phone": phone,
                "education": education,
                "career": career,
                "hobby": hobby,
                "family": family,
                "space": space,
                "wish": wish,
                "q1": q1,
                "q2": q2,
                "q3": q3,
            },
            error:function(){$("#erconts").html("Произошла ошибка!");},
            success: function (result) {
                /* В случае удачной обработки и отправки выполнится следующий код*/
                $('#fio').val('');
                $('#birthday').val('');
                $('#time').val('');
                $('#place').val('');
                $('#phone').val('');
                $('#education').val('');
                $('#career').val('');
                $('#hobby').val('');
                $('#family').val('');
                $('#space').val('');
                $('#wish').val('');
                $('#q1').val('');
                $('#q2').val('');
                $('#q3').val('');
                displayModal('modal2','flex');
            }
        });
    });
});