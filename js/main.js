// add active class to links

const navItem = document.querySelectorAll('.nav-item'),
      navLink = document.querySelectorAll('.nav-link');


navItem.forEach( item => {
    item.addEventListener('click' , () => {
        document.querySelector('header .navbar-nav .nav-item.active').classList.remove('active');
        item.classList.add('active')
    })
})


// add active class when reaches section

const sectionsAll = document.querySelectorAll('section[id] , header[id]');

window.addEventListener('scroll' , () => {
    const scrollY = window.pageYOffset;

    sectionsAll.forEach( current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('li a[href*="'+ sectionId +'"]').classList.add('active');
        } else {
            document.querySelector('li a[href*="'+ sectionId +'"]').classList.remove('active')
        }
    })
})

// change navbar style when scroll

const nav = document.querySelector('.navbar');

window.addEventListener( 'scroll' , () => {
    if (window.scrollY > 100) {
        nav.classList.add('scroll');
        nav.classList.remove('not-scroll')
    } else {
        nav.classList.remove('scroll');
        nav.classList.add('not-scroll')
    }
}) 
if (window.scrollY > 100) {
    nav.classList.add('scroll');
    nav.classList.remove('not-scroll')
} else {
    nav.classList.remove('scroll');
    nav.classList.add('not-scroll')
}

// when click nav link close navbar

$(window).on('load' , function () {
    $('.nav-link').on('click' , function () {
        $('.navbar-collapse').collapse('hide');
    });
});


// make button go to up

let upBtn = document.querySelector('.up-btn');


window.addEventListener('scroll' , () => {
    window.scrollY > 250 ? upBtn.classList.add('active-btn-up') : upBtn.classList.remove('active-btn-up');
})

upBtn.addEventListener('click' , () => {
    window.scrollTo({
        top : 0,
        behavior: "smooth"
    })
})