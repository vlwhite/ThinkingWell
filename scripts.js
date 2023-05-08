let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});


//Filter Js
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if (value == 'all') {
            $('.post-box').show("1000");
        } else {
            $(".post-box")
              .not("." + value)
              .hide("1000");
            $(".post-box")
              .filter("." + value)
              .show("1000");
        }
    });
    // Add active to btn
    $('.filter-item').click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});