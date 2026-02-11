// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "a") {
      navLinks.classList.remove("open");
    }
  });
}

// Smooth scrolling enhancement for in-page links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Contact form handling (front-end only, no backend wired)
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    formStatus.textContent = "Sending...";

    // Simulate async submit – in real deployment, replace with fetch() to backend or form API
    setTimeout(() => {
      formStatus.textContent =
        "Thank you for reaching out. A Xelora engineer will review your message and respond shortly.";
      contactForm.reset();
    }, 800);
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}



