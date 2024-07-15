document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.topBar',
        {
            duration: 3,
            opacity: 0,
            power: 3
        });
    gsap.from('.backToTop',{
        duration: 2,
        opacity: 0,
        scale: 0.7,
        y: 30,
        power: 2,
        scrollTrigger: {
            trigger: '.aboutMeIntro',
            start: 'top 90%',
            end: 'bottom 20%',
            scrub: 3,
            pinned: true,
            markers: false
        }
    });

        gsap.from('.heroBody',
            {
                duration: 2,
                y: 30,
                opacity: 0,
                power: 3
            });

    gsap.from('.aboutMeIntro',
        {
            duration: 3,
            opacity: 0,
            scrollTrigger: {
                trigger: '.aboutMeIntro',
                start: 'top 90%',
                end: 'bottom 20%',
                scrub: 3,
                pinned: true,
                markers: false
            }
        });
    gsap.from('.values',
        {
            duration: 3,
            opacity: 0,
            y: 50,
            scrollTrigger: {
                trigger: '.values',
                start: 'top 90%',
                end: 'bottom 20%',
                scrub: 3,
                pinned: true,
                markers: false
            }
        });
    gsap.from('.dedicatedIntro',
        {
            duration: 3,
            opacity: 0,
            y: 50,
            scrollTrigger: {
                trigger: '.dedicatedIntro',
                start: 'top 90%',
                end: 'bottom 20%',
                scrub: 3,
                pinned: true,
                markers: false
            }
        });
        gsap.from('.asA',
            {
                duration: 3,
                opacity: 0,
                x: 70,
                scrollTrigger: {
                    trigger: '.asA',
                    start: 'top 90%',
                    end: 'bottom 20%',
                    scrub: 3,
                    pinned: true,
                    markers: false
                }
        });
    gsap.from('.arrowSvg',
        {
            duration: 3,
            opacity: 0,
            y: 50,
            scale: 0.7,
            scrollTrigger: {
                trigger: '.arrowSvg',
                start: 'top 90%',
                end: 'bottom 20%',
                scrub: 3,
                pinned: true,
                markers: false
            }
});
gsap.from('.service1',
    {
        duration: 3,
        opacity: 0,
        x: 70,
        scrollTrigger: {
            trigger: '.service1',
            start: 'top 85%',
            end: 'bottom 65%',
            scrub: 3,
            pinned: true,
            markers: false
        }
});
gsap.from('.service2',
    {
        duration: 3,
        opacity: 0,
        x: 70,
        scrollTrigger: {
            trigger: '.service2',
            start: 'top 85%',
            end: 'bottom 65%',
            scrub: 3,
            pinned: true,
            markers: false
        }
});
gsap.from('.service3',
    {
        duration: 3,
        opacity: 0,
        x: 70,
        scrollTrigger: {
            trigger: '.service3',
            start: 'top 85%',
            end: 'bottom 65%',
            scrub: 3,
            pinned: true,
            markers: false
        }
});
gsap.from('.service4',
    {
        duration: 3,
        opacity: 0,
        x: 70,
        scrollTrigger: {
            trigger: '.service4',
            start: 'top 85%',
            end: 'bottom 65%',
            scrub: 3,
            pinned: true,
            markers: false
        }
});
gsap.from('.service5',
    {
        duration: 3,
        opacity: 0,
        x: 70,
        scrollTrigger: {
            trigger: '.service5',
            start: 'top 85%',
            end: 'bottom 65%',
            scrub: 3,
            pinned: true,
            markers: false
        }
});
gsap.from('.service6',
    {
        duration: 3,
        opacity: 0,
        x: 70,
        scrollTrigger: {
            trigger: '.service6',
            start: 'top 85%',
            end: 'bottom 65%',
            scrub: 3,
            pinned: true,
            markers: false
        }
});
gsap.from('.service7',
    {
        duration: 3,
        opacity: 0,
        x: 70,
        scrollTrigger: {
            trigger: '.service7',
            start: 'top 85%',
            end: 'bottom 65%',
            scrub: 3,
            pinned: true,
            markers: false
        }
});
gsap.from('.five',
    {
        duration: 3,
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: '.five',
            start: 'top 85%',
            end: 'bottom 65%',
            scrub: 3,
            pinned: true,
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
                scale:1.2,
                ease: "power1.inOut"
            });
            gsap.to(svg, {
                duration: 0.3,
                scale:1.2,
                filter: 'invert(0)',
                ease: "power1.inOut"
            });
        });

        backToTop.addEventListener('mouseleave', () => {
            gsap.to(backToTop, {
                duration: 0.3,
                scale:1,
                backgroundColor: 'transparent',
                ease: "power1.inOut"
            });
            gsap.to(svg, {
                duration: 0.3,
                scale:1,
                filter: 'invert(1',
                ease: "power1.inOut"
            });
        });
