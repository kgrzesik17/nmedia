const body = document.body,
    ScrollWrap = document.getElementsByClassName("content-wrapper")[0],
    height = ScrollWrap.getBoundingClientRect().height - 1,
    speed = 0.06;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smooth() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = `translateY(-${offset}px) translateZ(0)`;
    ScrollWrap.style.transform = scroll;

    requestScroll = requestAnimationFrame(smooth);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    }));
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el => observer.observe(el)));

document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".type");
  
    if ("IntersectionObserver" in window) {
      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      });
  
      observer.observe(target);
    } else {
      target.classList.add("animated");
    }
  });

  function test() {
    document.getElementById("aboutme-text").scrollIntoView();
  }

smooth()