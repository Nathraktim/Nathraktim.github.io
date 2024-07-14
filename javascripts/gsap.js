document.addEventListener('DOMContentLoaded', () => {
gsap.from('.main',
        {
            duration: 3,
            y: 30,
            opacity: 0
        });

        gsap.from('.two',
            {
                duration: 3,
                opacity: 0,
                scrollTrigger: {
                    trigger: '.two',
                    start: 'top 90%',
                    end: 'bottom 20%',
                    scrub: 3,
                    pinned: true,
                    markers: true
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
                        markers: true
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
                            markers: true
                        }
                    });
});
