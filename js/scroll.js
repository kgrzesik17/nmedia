document.getElementById("scroll-to-aboutme").addEventListener("click", function () {
    const target = document.getElementById("aboutme");
  
    if (target) {
        const scrollableParent = getScrollableParent(target);
        if (scrollableParent) {
            scrollableParent.scrollTo({
                top: target.offsetTop - scrollableParent.offsetTop - 200,
                behavior: "smooth",
            });
        } else {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
  });
  
  document.getElementById("nav-scroll-to-aboutme").addEventListener("click", function () {
    const target = document.getElementById("aboutme");
  
    if (target) {
        const scrollableParent = getScrollableParent(target);
        if (scrollableParent) {
            scrollableParent.scrollTo({
                top: target.offsetTop - scrollableParent.offsetTop - 200,
                behavior: "smooth",
            });
        } else {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
  });
  
  function getScrollableParent(element) {
      let parent = element.parentNode;
      while (parent) {
          const overflowY = window.getComputedStyle(parent).overflowY;
          if (overflowY === "auto" || overflowY === "scroll") {
              return parent;
          }
          parent = parent.parentNode;
      }
      return null;
  }