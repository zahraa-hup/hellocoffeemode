
document.getElementById("baricon").onclick= function()
{
    document.getElementById("baricon").classList.toggle("fa-bars");
    document.getElementById("baricon").classList.toggle("fa-xmark");
    document.getElementById("nav-hide").classList.toggle("nav-hide");
    document.getElementById("nav-hide").classList.toggle("nav-hide-js");
}
setInterval(function(){
    setTimeout(() => {
        document.getElementById("imgx").style.translate="0px -40px"; 
        setTimeout(() => {
            document.getElementById("imgx").style.translate="0px 40px"; 
              
        },1000); 
    },1000);
},2100);

document.getElementsByClassName("write").onchange=function(){
  document.getElementsByClassName("write").style.color="black";
}




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });