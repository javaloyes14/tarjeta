/* ==================================================
   JERÓNIMO JAVALOYES S.L.
   app.js
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    init();

});

function init(){

    revealCards();

    rippleEffect();

    headerAnimation();

    smoothScroll();

}

/*====================================
    EFECTO APARICIÓN
====================================*/

function revealCards(){

    const cards = document.querySelectorAll(".card, .content");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    cards.forEach(card=>{

        observer.observe(card);

    });

}

/*====================================
    EFECTO RIPPLE
====================================*/

function rippleEffect(){

    document.querySelectorAll(".card").forEach(card=>{

        card.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            ripple.className="ripple";

            const rect=this.getBoundingClientRect();

            ripple.style.left=(e.clientX-rect.left)+"px";

            ripple.style.top=(e.clientY-rect.top)+"px";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },700);

        });

    });

}

/*====================================
    CABECERA
====================================*/

function headerAnimation(){

    const hero=document.querySelector(".hero");

    window.addEventListener("scroll",()=>{

        const y=window.scrollY;

        hero.style.transform=`translateY(${y*0.25}px)`;

    });

}

/*====================================
    SCROLL SUAVE
====================================*/

function smoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}
