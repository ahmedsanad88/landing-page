// jshint esversion:6

// dark and white mood.
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
let BG = document.body.style.backgroundColor;
let nav = document.getElementById('nav');


const night = () => {
    sun.classList.remove('changeSunIn');
    sun.classList.add('changeSunOut');
    document.body.style.backgroundColor = "black";
    setTimeout(() => {
        sun.style.display="none";
    }, 400);
    setTimeout(() => {
        moon.classList.add('changeMoonIn');
        moon.style.display = "block";
    }, 300);
    nav.style.backgroundColor = "#222222";
    document.documentElement.style.setProperty("--mainColor", "white");
    document.documentElement.style.setProperty("--secondColor", "black");

    return false;
};

const day = () => {
    moon.classList.remove('changeMoonIn');
    moon.classList.add('changeMoonOut');
    document.body.style.backgroundColor = "white";
    setTimeout(() => {
        moon.style.display="none";
    }, 400);
    setTimeout(() => {
        sun.classList.remove('changeSunOut');
        sun.classList.add('changeSunIn');
        sun.style.display = "block";
    }, 300);
    nav.style.backgroundColor = "white";
    document.documentElement.style.setProperty("--mainColor", "black");
    document.documentElement.style.setProperty("--secondColor", "white");
    return false;
};

sun.onclick = night;
moon.onclick = day;

// slider 
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');

let activeSlide = 1;

let clickNav = (element) => {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });


    slides[element].classList.add('active');
    btns[element].classList.add('active');
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        clickNav(i);
        activeSlide = i;
    });
});

// Auto Play slider
var repeat = (activeClass) => {
    let active = document.getElementsByClassName('active');
    let i = 0;

    var autoplay = () => {
        setTimeout(() => {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
                let x = activeSlide.id;
                // console.log(parseInt(x));
                i = x;
                // console.log(activeSlide);
            });


            if (i > 0 && i < 5) {
                slides[i].classList.add('active');
                btns[i].classList.add('active');
                i++;
            } else {
                i = 0;
                slides[i].classList.add('active');
                btns[i].classList.add('active');
            }

            autoplay();
        }, 10000);
    };
    autoplay();
}
repeat();


// animations
const animate1 = () => {
    document.getElementById('type').classList.add('animate');
};
const animate2 = () => {
    document.getElementById('type').classList.remove('animate');
};

setInterval(() => {
    animate1();
}, 5000);

setInterval(() => {
    animate2();
}, 16000);


// btnEnter

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('btnEnter').classList.add('btnMove');
});