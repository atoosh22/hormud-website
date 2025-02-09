
const hover=document.querySelector(".card2");
const img=document.querySelector(".eight");
hover.addEventListener("mouseover",()=>{
hover.style="background:#00A550;color:#fff";
});

img.addEventListener("mouseover",()=>{
    img.style="background:#00A550;color:#fff";
});


const car2=document.querySelector(".card2");
const eight=document.querySelector(".eight");
car2.addEventListener("mouseleave",()=>{
hover.style="background:#fff;color:#3e3e3e";
});
eight.addEventListener("mouseleave",()=>{
    eight.style="background:#fff";
});

const button = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});








