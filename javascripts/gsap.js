gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    // Example usage of multiple plugins
    // gsap.registerPlugin(MotionPathPlugin, TextPlugin);

    gsap.from('.topBar', {
        duration: 3,
        opacity: 0,
        ease: "power3", 
    });

    gsap.from('.backToTop', {
        duration: 2,
        opacity: 0,
        scale: 0.7,
        y: 30,
        ease: "power2", 
        scrollTrigger: {
            trigger: '.aboutMeIntro',
            start: 'top 90%',
            end: 'bottom 20%',
            scrub: 3,
            pin: true,
            markers: false
        }
    });

    gsap.from('.heroBody', {
        duration: 2,
        y: 30,
        opacity: 0,
        ease: "power3",
    });

    const sections = gsap.utils.toArray(".aboutMeRowRow");
    gsap.to('.two', {
        duration: 3,
        x: 0.5,
        scrollTrigger: {
            trigger: '.two',
            start: 'top 0%',
            end: 'bottom 0%',
            scrub: 3,
            pin: true,
            markers: false
        }
    });

    gsap.from('.values', {
        duration: 3,
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: '.values',
            start: 'top 95%',
            end: 'bottom 50%',
            scrub: 3,
            pin: true,
            markers: false
        }
    });

    gsap.from('.dedicatedIntro', {
        duration: 3,
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: '.dedicatedIntro',
            start: 'top 90%',
            end: 'bottom 20%',
            scrub: 3,
            pin: true,
            markers: false
        }
    });

    gsap.from('.asA', {
        duration: 3,
        opacity: 0,
        x: 70,
        scrollTrigger: {
            trigger: '.asA',
            start: 'top 95%',
            end: 'bottom 50%',
            scrub: 3,
            pin: true,
            markers: false
        }
    });

    gsap.from('.arrowSvg', {
        duration: 3,
        opacity: 0,
        y: 50,
        scale: 0.7,
        scrollTrigger: {
            trigger: '.arrowSvg',
            start: 'top 90%',
            end: 'bottom 50%',
            scrub: 3,
            pin: true,
            markers: false
        }
    });

    // Repeating sections for services
    for (let i = 1; i <= 7; i++) {
        gsap.from(`.service${i}`, {
            duration: 3,
            opacity: 0,
            x: i < 7 ? 70 : 0, // Y movement for `.service7`
            y: i === 7 ? 70 : 0,
            scrollTrigger: {
                trigger: `.service${i}`,
                start: 'top 100%',
                end: 'top 80%',
                scrub: 5,
                pin: true,
                markers: false
            }
        });
    }

    gsap.from('.five', {
        duration: 3,
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: '.five',
            start: 'top 90%',
            end: 'top 65%',
            scrub: 3,
            pin: true,
            markers: false
        }
    });

    gsap.to('.aboutMeRowRow', {
        xPercent: -90,
        scrollTrigger: {
            trigger: '.aboutMeRowRow',
            start: 'top 40%',
            end: 'bottom 0%',
            scrub: 5,
            markers: false
        }
    });
});

const backToTop = document.querySelector('.backToTop');
const svg = backToTop.querySelector('svg');

backToTop.addEventListener('mouseenter', () => {
    gsap.to(backToTop, {
        duration: 0.3,
        backgroundColor: '#ffffff',
        scale: 1.2,
        ease: "power1.inOut"
    });
    gsap.to(svg, {
        duration: 0.3,
        scale: 1.2,
        filter: 'invert(0)',
        ease: "power1.inOut"
    });
});

backToTop.addEventListener('mouseleave', () => {
    gsap.to(backToTop, {
        duration: 0.3,
        scale: 1,
        backgroundColor: 'transparent',
        ease: "power1.inOut"
    });
    gsap.to(svg, {
        duration: 0.3,
        scale: 1,
        filter: 'invert(1)',
        ease: "power1.inOut"
    });
});

let state = 0;
const navIcon = document.getElementById('navIcon');
const navBaar = document.getElementById('navBaar');
const navBarHeight = navBaar.getBoundingClientRect().height;

function toggleNav() {
    if (state === 0) {
        gsap.to(navBaar, {
            duration: 1,
            yPercent: 100,
            scrub: 3,
        });
        gsap.to('.navIcon', {
            duration: 0.5,
            y: `${navBarHeight}px`,
            ease: 'power2.in',
        });
        state = 1;
    } else {
        gsap.to(navBaar, {
            duration: 1,
            yPercent: -100,
            scrub: 3,
        });
        gsap.to('.navIcon', {
            duration: 0.5,
            y: 0,
            ease: 'power2.in',
        });
        state = 0;
    }
}

navIcon.addEventListener('click', toggleNav);

const closeButtons = document.querySelectorAll('.closeBtn, .closeBtn2, .closeBtn3, .closeBtn4');
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        gsap.to(navBaar, {
            duration: 1,
            yPercent: -100,
            scrub: 3,
        });
        gsap.to('.navIcon', {
            duration: 0.5,
            y: 0,
            ease: 'power2.in',
        });
        state = 0;
    });
});

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('main');

    gsap.to(loader, {
        duration: 0.5,
        x: '-100vw',
        onComplete: () => {
            loader.style.display = 'none';
            content.classList.remove('invisible');
        }
    });
});
