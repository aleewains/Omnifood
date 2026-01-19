const yearEl = document.querySelector(".year");
const year = new Date().getFullYear();
yearEl.innerHTML = year;

const btnNav = document.querySelector(".btn-mobile-nav");
const headerNav = document.querySelector(".header");
btnNav.addEventListener("click", function () {
  headerNav.classList.toggle("nav-open");
});

///// smooth scrolling

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link"))
      headerNav.classList.toggle("nav-open");
  });
});

//// sticky navbar
const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);
