const tl = gsap.timeline();
window.addEventListener('DOMContentLoaded', (event) => {

tl.from('a', {
    duration: 1,
    opacity: 0,
    delay: 1.5,
    y: 50,
    stagger: 0.2,
});

gsap.from('.linePath', {
    duration: 4,
    opacity: 0,
    duration: 1,
    width: 0,
    ease: "power2.out",
    stagger: 1,
    delay: 1
});

// tl.from('p', {
//     duration: 2,
//     opacity: 0,
//     ease: "power2.out",
//     delay: 1
// });
});

window.addEventListener('DOMContentLoaded', (event) => {
    const text = document.getElementById('animatedText');
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";

    for(let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++
        if(char === splitText.length){
            complete();
            return;
        }
    }

    function complete(){
        clearInterval(timer);
        timer = null;
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    const text = document.getElementById('animatedText');

    const tween = gsap.to(text, {
        backgroundPosition: "200% 0",
        duration: 3,
        repeat: -1, // Infinite repeat
        ease: "power1.inOut" // Start the animation paused
    });

    text.addEventListener('mouseover', () => {
        tween.play(); // Play the animation on hover
    });

    text.addEventListener('mouseout', () => {
        tween.pause(); // Pause the animation when the mouse leaves
    });
});