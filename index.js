onst $openClose=document.getElementById('open-close');
const $nav=document.getElementById('lat-nav');
const $themeToggler= document.querySelector('.theme');

//BAR-NAV


$openClose.addEventListener('click',()=>{
    $nav.classList.toggle('active');
});
