document.addEventListener('DOMContentLoaded', function(){
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header .nav');
    const sNav = document.querySelector('header .s-nav');
    toggle && toggle.addEventListener('click', function(){
        nav.classList.toggle('open');
        toggle.classList.toggle('active');
        toggle.setAttribute('aria-expanded', toggle.classList.contains('active'));
        sNav && sNav.classList.toggle('open');
    });
    });