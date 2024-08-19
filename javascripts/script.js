      var animation = lottie.loadAnimation({
        container: document.getElementById("navIcon"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "/./assets/icons/icons8-menu2.json",
      });

      var initial = true;
      document.getElementById("navIcon").addEventListener("click", function () {
        if (initial) {
          animation.playSegments([0, 14], true);
          initial = false;
          gsap.to(".navIcon", {
            duration: 0.5,
            rotate: 90,
            ease: "power1.inOut",
          });
        } else {
          animation.playSegments([14, 0], true);
          initial = true;
          gsap.to(".navIcon", {
            duration: 0.5,
            rotate: 0,
            ease: "power1.inOut",
          });
        }
      });

      document.querySelector('.closeBtn').addEventListener('click', () => {
        if (initial) {
          animation.playSegments([0, 14], true);
          initial = false;
          gsap.to(".navIcon", {
            duration: 0.5,
            rotate: 90,
            ease: "power1.inOut",
          });
        } else {
          animation.playSegments([14, 0], true);
          initial = true;
          gsap.to(".navIcon", {
            duration: 0.5,
            rotate: 0,
            ease: "power1.inOut",
          });
        }
    });


    