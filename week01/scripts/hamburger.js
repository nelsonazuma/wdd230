document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const menuItems = document.getElementById("menu-items");

  menuToggle.addEventListener("click", function () {
    menuItems.classList.toggle("show-menu");
  });

  // Dark mode toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
  });
});
