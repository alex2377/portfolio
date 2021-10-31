const hamburger=document.querySelector('.hamburger');
const menu=document.querySelector('.menu');
const closeElem=document.querySelector('.menu__close');
hamburger.addEventListener('click',()=>{
    menu.classList.add('active');
}
    )
closeElem.addEventListener('click',()=>{
    menu.classList.remove('active');
})
const ratingItems=document.querySelectorAll('.skills__ratingsItem');
window.addEventListener('load',function(){
ratingItems.forEach(elem=>{
    elem.querySelector('.skills__ratingsProgressFilling').style.width=elem.querySelector('.skills__ratingsPercent').textContent;
})
})