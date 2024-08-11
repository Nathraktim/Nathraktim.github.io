
document.addEventListener('DOMContentLoaded', () => {
  
    //list as many as you'd like
// gsap.registerPlugin(MotionPathPlugin, TextPlugin);
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
            const sections = gsap.utils.toArray(".aboutMeRowRow");
    gsap.to('.two',
        {
            duration: 3,
            xPercent: -100 * (sections.length - 1),
            // opacity: 0,
            scrollTrigger: {
                trigger: '.two',
                start: 'top 0%',
                end: 'bottom 0%',
                scrub: 3,
                pin: true,
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
gsap.to('.aboutMeRowRow',
    {
        // duration: 5,
        xPercent: -90,
        scrollTrigger: {
            trigger: '.aboutMeRowRow',
            start: 'top 40%',
            end: 'bottom 0%',
            scrub: 5,
            // pin: true,
            markers: false
        }
})
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


        let state = 0;

        const navIcon = document.getElementById('navIcon');
        const navBaar = document.getElementById('navBaar');
        const navBarHeight = navBaar.getBoundingClientRect().height;
        function toggleNav() {
            if (state === 0) {
                // Show navBaar with animation
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
                // Hide navBaar with animation
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
        // navItems.forEach(item => {
        //     item.addEventListener('click', toggleNav);
        // });
        // Optional: handle close button inside navBaar
        document.querySelector('.closeBtn').addEventListener('click', () => {
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
            state = 0; // Close if open
        });
        document.querySelector('.closeBtn2').addEventListener('click', () => {
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
            state = 0; // Close if open
        });
        document.querySelector('.closeBtn3').addEventListener('click', () => {
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
            state = 0; // Close if open
        });
        document.querySelector('.closeBtn4').addEventListener('click', () => {
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
            state = 0; // Close if open
        });
        // document.querySelector('.closeBtn5').addEventListener('click', () => {
        //     gsap.to(navBaar, {
        //         duration: 1,
        //         yPercent: -100,
        //         scrub: 3,
        //     });
        //     gsap.to('.navIcon', {
        //         duration: 0.5,
        //         y: 0,
        //         ease: 'power2.in',
        //     });
        //     state = 0; // Close if open
        // });

        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            const content = document.getElementById('main');

            // Hide the loader with animation
            gsap.to(loader, {
                duration: 0.5, // Duration of the fade-out animation
                x: '-100vw',
                // opacity: 0,
                onComplete: () => {
                    // After the animation, set display to 'none'
                    loader.style.display = 'none';
                    // Show the main content
                    content.classList.remove('invisible');
                    content.classList.add('visible', gsap.from(main, {opacity: 0, duration: 1}));
                }
            });
        });