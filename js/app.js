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

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 
            "b .7s infinite steps(1), t calc(var(--n)*.02s) steps(var(--n)) forwards";
          observer.unobserve(entry.target); // Stop observing after starting animation
        }
      });
    }, { threshold: 0.5 }); // Adjust visibility threshold as needed
  
    document.querySelectorAll(".type").forEach(el => observer.observe(el));
  });

smooth()