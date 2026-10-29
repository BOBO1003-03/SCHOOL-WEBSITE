const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const yearEl = document.getElementById("year");
const contactForm = document.getElementById("contactForm");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = contactForm.querySelector("button");
    const originalText = button.textContent;

    button.textContent = "Message Sent";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      contactForm.reset();
    }, 2200);
  });
}
