//toggle class active
const navbarContent = document.querySelector('.navbar-content');
//ketika humburger menu di click
document.querySelector('#hamburger-menu').onclick = () =>{
    navbarContent.classList.toggle('active');
};
//click diluar side bar untuk menghilangkan nav//
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target) && !navbarContent.contains(e.target)){
    navbarContent.classList.remove('active');
    }
});