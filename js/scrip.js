const btnMenu = document.querySelector("#btnMenu")
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i<subMenuBtn. length; i++) {
    subMenuBtn[i].addEventListener("click", function(){
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            } else{
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }
            
        }
    });
}

ScrollReveal().reveal('.img__portada');
ScrollReveal().reveal('.info',{delay:300});
ScrollReveal().reveal('.cursos',{delay:300});
ScrollReveal().reveal('.footer',{delay:300});

/*

ScrollReveal().reveal('.footer',{delay:500});
ScrollReveal().reveal('.cards-banner-one',{delay:500});
ScrollReveal().reveal('.cards-banner-two',{delay:500});

*/