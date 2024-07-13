const name = "Raktim";
      document.querySelectorAll(".name");
        document.querySelectorAll(".name").forEach((element) => {
            element.innerHTML = name;
        });

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
        } else {
          animation.playSegments([14, 0], true);
          initial = true;
        }
      });

document.querySelector(".githubIcon").addEventListener("click", function() {
  console.log("clicked");
});