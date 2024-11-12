
//Mobile Menu--------------------------------------------
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelector('.mobile-menu--links');
function showMobileMenu(e){
    e.stopPropagation();
    mobileLinks.classList.toggle('invisible');
    mobileLinks.classList.toggle('left-[-100px]')
    mobileLinks.classList.toggle('opacity-0')
}
mobileMenu.addEventListener('click',showMobileMenu);
document.addEventListener('click',e=>{
    mobileLinks.classList.add('invisible');
    mobileLinks.classList.add('left-[-100px]')
    mobileLinks.classList.add('opacity-0') 
})
//Mobile Menu--------------------------------------------