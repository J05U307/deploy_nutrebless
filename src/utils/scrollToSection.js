export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  const header = document.querySelector("header");

  if (!section) return;

  const headerHeight = header ? header.offsetHeight : 0;

  const sectionTop =
    section.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: sectionTop - headerHeight,
    behavior: "smooth",
  });
};
