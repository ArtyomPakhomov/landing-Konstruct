const body = document.body;
const tl = gsap.timeline();

tl.fromTo(
  ".hero-bg__img img",
  {
    scale: 0.5,
    opacity: 0,
  },
  {
    scale: 1,
    opacity: 1,
    duration: 2,
    ease: "power2.out",
    stagger: {
      amount: 1.5,
      from: "random",
    },
  }
).from(".light-logo, .hero-title, .hero-descr, .hero-btn", {
  y: -5,
  opacity: 0,
  duration: 1,
  stagger: {
    amount: 0.2,
  },
});
gsap.registerPlugin(CSSRulePlugin);
const lineTL = gsap.timeline({
  defaults: {
    duration: 1.5,
  },
  repeat: -1,
  repeatDelay: 5,
});

gsap.set(CSSRulePlugin.getRule(".story__title:after"), {
  cssRule: {
    x: "-100%",
  },
});

lineTL
  .to(CSSRulePlugin.getRule(".story__title:after"), {
    ease: "circ.in",
    cssRule: {
      x: "0%",
    },
  })
  .to(CSSRulePlugin.getRule(".story__title:after"), {
    ease: "circ.out",
    cssRule: {
      scaleX: 0,
      transformOrigin: "right",
    },
  })
  .to(CSSRulePlugin.getRule(".story__title:after"), {
    ease: "circ.in",
    cssRule: {
      scaleX: 1,
      x: "100%",
    },
  })
  .to(CSSRulePlugin.getRule(".story__title:after"), {
    ease: "circ.out",
    cssRule: {
      x: "200%",
    },
  });

// ! Burger-menu
const burgerMenu = document.querySelector(".burger-menu");
const navOverlay = document.querySelector(".nav-overlay");
const navHeader = navOverlay.querySelector(".nav-header");
const navItem = navHeader.querySelectorAll(".nav-header__link");
const navClose = document.querySelector(".nav-close");

burgerMenu?.addEventListener("click", () => {
  navOverlay.classList.add("nav-overlay--visible");
  navHeader.classList.add("nav-header--visible");
  disableScroll();
});

navClose?.addEventListener("click", () => {
  navOverlay.classList.remove("nav-overlay--visible");
  navHeader.classList.remove("nav-header--visible");
  enableScroll();
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    navOverlay.classList.remove("nav-overlay--visible");
    navHeader.classList.remove("nav-header--visible");
    enableScroll();
  });
});

navOverlay.addEventListener("click", (e) => {
  if (e.target == navOverlay) {
    navOverlay.classList.remove("nav-overlay--visible");
    navHeader.classList.remove("nav-header--visible");
    enableScroll();
  }
});

function enableScroll() {
  body.classList.remove("scroll-disable");
  body.style.paddingRight = 0;
}

function disableScroll() {
  let paddingOffset = window.innerWidth - document.body.offsetWidth;
  body.style.paddingRight = `${paddingOffset}px`;
  body.classList.add("scroll-disable");
}

// Animation story-items
const storyItems = document.querySelectorAll(".story-item");

storyItems.forEach((item) => {
  item.addEventListener("click", (el) => {
    const self = el.currentTarget;

    if (self.classList.contains("story-item--active")) {
      self.classList.remove("story-item--active");
    } else {
      storyItems.forEach((item) => {
        item.classList.remove("story-item--active");
      });
      self.classList.add("story-item--active");
    }
  });
});
