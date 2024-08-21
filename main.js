const selectElement = (element) => {
  const el = document.querySelector(element);
  if (el) return el;
  throw new Error(`${element} tidak ditemukan`);
};

const menuToggle = selectElement("#menu-toggle");

const toggleMenu = () => {
  const mobileMenu = selectElement("#nav-menu");
  mobileMenu.classList.toggle("activated");
  menuToggle.classList.toggle("activated");
};

menuToggle.addEventListener("click", toggleMenu);
