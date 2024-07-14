document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.main',
        {
            duration: 3,
            y: -30,
            opacity: 0
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
            start: 'top 90%',
            end: 'bottom 20%',
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
            start: 'top 90%',
            end: 'bottom 20%',
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
            start: 'top 90%',
            end: 'bottom 20%',
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
            start: 'top 90%',
            end: 'bottom 20%',
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
            start: 'top 90%',
            end: 'bottom 20%',
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
            start: 'top 90%',
            end: 'bottom 20%',
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
            start: 'top 90%',
            end: 'bottom 20%',
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
            start: 'top 90%',
            end: 'bottom 20%',
            scrub: 3,
            pinned: true,
            markers: false
        }
});
});
