/* =====================================================
   1. Smooth Scroll for Internal Links
   ===================================================== */
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
  });
});


/* =====================================================
   2. Dark / Light Mode Toggle
   ===================================================== */
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌓";
toggleBtn.className = "theme-toggle-btn";

document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", 
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}


/* =====================================================
   3. Text Typing Animation (Header Subtitle)
   ===================================================== */
const text = [
  "Aspiring AI/ML Data Scientist",
  "Python Developer",
  "Data Analyst",
  "ML Enthusiast"
];

let i = 0; 
let j = 0; 
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const element = document.querySelector(".dynamic-text");
  if (!element) return;

  currentText = text[i];

  if (isDeleting) {
    element.innerHTML = currentText.substring(0, j--);
  } else {
    element.innerHTML = currentText.substring(0, j++);
  }

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 90);
}

typeEffect();


/* =====================================================
   4. Back to Top Button
   ===================================================== */
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.className = "back-to-top-btn";
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 250 ? "block" : "none";
});


/* =====================================================
   5. Reveal Animations on Scroll
   ===================================================== */
const revealElements = document.querySelectorAll(".card, .project");

function revealOnScroll() {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* =====================================================
   6. Show Current Year in Footer
   ===================================================== */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.innerText = new Date().getFullYear();
}


/* =====================================================
   7. Responsive Mobile Menu (Optional)
   ===================================================== */
const menuBtn = document.querySelector(".mobile-menu-btn");
const nav = document.querySelector(".mobile-nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}