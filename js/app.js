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

smooth()