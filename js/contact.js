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
                // displayModal('modal','flex');
            }
        });
    });
});