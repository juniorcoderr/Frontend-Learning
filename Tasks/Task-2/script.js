// Mobile menu toggle functionality
// DOMContentLoaded -> It ensures that only after loading the full HTML, then JS code will run. To avoid null reference errors.
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn"); // Hamburger icon button
  const navMenu = document.getElementById("nav-menu"); // Navigation links container (Home, Contact, Offers)

  // Safety Check
  if (mobileMenuBtn && navMenu) {
    // When hamburger button is clicked, then only event is triggered
    mobileMenuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active"); // add/remove CSS Class "active" - make .active class of CSS visible (mobile view menu)
      const isExpanded = navMenu.classList.contains("active");
      mobileMenuBtn.setAttribute("aria-expanded", isExpanded); // Accessibility feature
    });
  }
});
