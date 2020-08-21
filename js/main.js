$("body").on('click', '[href*="#"]', function(e){
    let fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});

function displayModal (id, bool) {
    let body = document.body

    let modal = document.getElementById(id)

    let app = document.getElementById('app')


    if (bool !== 'none') {
        // body.style.overflowY = 'hidden'
        // body.style.width = 'calc(100% - 15px)'

        setTimeout(() => {
            modal.style.opacity = '1'
        }, 0)

        app.style.filter = 'blur(2px)'
        modal.style.display = bool
    } else {
        modal.style.opacity = '0'
        app.style.filter = 'none'

        setTimeout(() => {
            modal.style.display = bool
            // body.style.overflowY = 'auto'
            // body.style.width = '100%'
        }, 300)
    }
}