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

// Burger menu

let burgerOn = false
let burger = document.getElementById('burger')
let mask = document.getElementById('burger-mask')

function burgerMenu () {
    burgerOn = !burgerOn

    if (burgerOn) {
        mask.style.display = 'block'
        burger.classList.add('header-burger__cross')
        setTimeout(() => {
            mask.style.opacity = '1'
        }, 0)
    } else {
        mask.style.opacity = '0'
        burger.classList.remove('header-burger__cross')
        setTimeout(() => {
            mask.style.display = 'none'
        }, 500)
    }
}

let scrollTop = window.scrollY

function scrollFunction () {
    let header = document.querySelector('.header__top')
    let burgerMenu = document.querySelector('.burger-menu')
    let burgerSpan = document.querySelectorAll('.burger-menu__span')
    let logoPath = document.querySelectorAll('.header__logo svg path')
    if (document.body.clientWidth < 1025) {

        if (window.scrollY >= 526) {
            header.style.background = '#F4EAE8'
            burgerMenu.style.background = '#F4EAE8'
            burgerMenu.style.color = '#323232'
            burgerSpan.forEach(item => {
                item.style.backgroundColor = '#323232'
            })
            logoPath.forEach(item => {
                item.style.stroke = '#323232'
                item.style.fill = '#323232'
            })
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.5)'
            burgerMenu.style.background = 'rgba(0, 0, 0, 0.5)'
            burgerMenu.style.color = '#EEEEEE'
            burgerSpan.forEach(item => {
                item.style.backgroundColor = '#EEEEEE'
            })
            logoPath.forEach(item => {
                item.style.stroke = '#EEEEEE'
                item.style.fill = '#EEEEEE'
            })
        }
    } else {
        header.style.background = 'transparent'
    }
}

window.onscroll = () => {
    // buyMe()
    scrollFunction()
}