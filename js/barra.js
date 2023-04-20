//expandir menu
var expanda = document.querySelector('#expanda')
var menuSide = document.querySelector('.sidebar')

expanda.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})