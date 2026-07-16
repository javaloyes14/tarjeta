/* ===========================================
   JERÓNIMO JAVALOYES S.L.
   app.js
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarAnimaciones();
    efectoBotones();
    mostrarTarjetas();

});

/* ===========================================
      Animación inicial
=========================================== */

function iniciarAnimaciones(){

    const logo = document.querySelector(".logo");
    const titulo = document.querySelector("h1");
    const empresa = document.querySelector(".empresa");
    const linea = document.querySelector(".divider");

    if(logo){
        logo.animate([
            {
                transform:"scale(.6)",
                opacity:0
            },
            {
                transform:"scale(1)",
                opacity:1
            }
        ],{
            duration:700,
            easing:"ease-out",
            fill:"forwards"
        });
    }

    if(titulo){

        titulo.animate([
            {
                opacity:0,
                transform:"translateY(20px)"
            },
            {
                opacity:1,
                transform:"translateY(0)"
            }

        ],{

            duration:700,
            delay:250,
            fill:"forwards"

        });

    }

    if(empresa){

        empresa.animate([
            {
                opacity:0
            },
            {
                opacity:1
            }

        ],{

            duration:700,
            delay:450,
            fill:"forwards"

        });

    }

    if(linea){

        linea.animate([
            {
                width:"0px"
            },
            {
                width:"70px"
            }

        ],{

            duration:600,
            delay:700,
            fill:"forwards"

        });

    }

}

/* ===========================================
      Tarjetas
=========================================== */

function mostrarTarjetas(){

    const cards=document.querySelectorAll(".card");

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    },{

        threshold:.2

    });

    cards.forEach(card=>{

        observer.observe(card);

    });

}

/* ===========================================
      Botones
=========================================== */

function efectoBotones(){

    const botones=document.querySelectorAll(".button");

    botones.forEach((boton)=>{

        boton.addEventListener("mousedown",()=>{

            boton.style.transform="scale(.97)";

        });

        boton.addEventListener("mouseup",()=>{

            boton.style.transform="scale(1)";

        });

        boton.addEventListener("mouseleave",()=>{

            boton.style.transform="scale(1)";

        });

    });

}

/* ===========================================
      Scroll suave
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
