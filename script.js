let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`header nav a[href*="${id}"]`)
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};




// Create binary code animation
const homeImg = document.querySelector('.home-img');
if (homeImg) {
  const binaryContainer = document.createElement('div');
  binaryContainer.className = 'binary-code';
  homeImg.appendChild(binaryContainer);
  
  // Create 50 binary digits
  for (let i = 0; i < 50; i++) {
    const digit = document.createElement('span');
    digit.className = 'binary-digit';
    digit.textContent = Math.random() > 0.5 ? '1' : '0';
    
    // Random properties
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = 10 + Math.random() * 20;
    const size = 8 + Math.random() * 8;
    const blur = Math.random() * 3;
    
    digit.style.left = `${left}%`;
    digit.style.animationDelay = `${delay}s`;
    digit.style.animationDuration = `${duration}s`;
    digit.style.fontSize = `${size}px`;
    digit.style.filter = `blur(${blur}px)`;
    
    binaryContainer.appendChild(digit);
  }
}