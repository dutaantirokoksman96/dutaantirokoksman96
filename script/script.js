var nav = document.querySelector('nav');
let logo = document.getElementById('logo-nav')
window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
        nav.classList.remove('navbar-dark')
        nav.classList.add('bg-light','shadow','navbar-light');
    }else{
        nav.classList.remove('bg-light','shadow')
        nav.classList.add('navbar-dark')
    }
})