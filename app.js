/* ==========================================
   JERÓNIMO JAVALOYES S.L.
   APP.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarAnimacion();

    activarRipple();

    observarTarjetas();

    efectoScroll();

});


/* ==========================================
   ANIMACIÓN INICIAL
========================================== */

function iniciarAnimacion(){

    document.body.classList.add("loaded");

}


/* ==========================================
   EFECTO RIPPLE EN BOTONES
========================================== */

function activarRipple(){

    const botones=document.querySelectorAll(".action");

    botones.forEach((boton)=>{

        boton.addEventListener("click",(e)=>{

            const ripple=document.createElement("span");

            ripple.className="ripple";

            const rect=boton.getBoundingClientRect();

            ripple.style.left=(e.clientX-rect.left)+"px";

            ripple.style.top=(e.clientY-rect.top)+"px";

            boton.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });

}


/* ==========================================
   APARICIÓN AL HACER SCROLL
========================================== */

function observarTarjetas(){

    const elementos=document.querySelectorAll(".about,.address,.actions");

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    elementos.forEach((elemento)=>{

        observer.observe(elemento);

    });

}


/* ==========================================
   EFECTO PARALLAX CABECERA
========================================== */

function efectoScroll(){

    const hero=document.querySelector(".hero");

    window.addEventListener("scroll",()=>{

        const y=window.scrollY;

        hero.style.backgroundPositionY=(y*0.3)+"px";

    });

}
