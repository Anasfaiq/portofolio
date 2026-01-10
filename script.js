// Detect active section and highlight navbar item
function updateActiveNavItem() {
  const sections = [
    { id: "home", href: "#home" },
    { id: "about-me", href: "#about-me" },
    { id: "skills", href: "#skills" },
    { id: "projects", href: "#projects" },
    { id: "contact", href: "#contact" },
  ];

  const navItems = document.querySelectorAll(".nav-item");
  let activeSection = "home";

  // Find which section is currently visible
  sections.forEach((section) => {
    const element = document.getElementById(section.id);
    if (element) {
      const rect = element.getBoundingClientRect();
      // Check if section is in viewport (at least 100px from top)
      if (rect.top <= 200 && rect.bottom > 0) {
        activeSection = section.id;
      }
    }
  });

  // Update active class on nav items
  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${activeSection}`) {
      item.classList.add("active");
    }
  });
}

// Listen to scroll events
window.addEventListener("scroll", updateActiveNavItem);

// Call on page load
document.addEventListener("DOMContentLoaded", updateActiveNavItem);

// Also update when clicking nav items
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    setTimeout(updateActiveNavItem, 100);
  });
});
