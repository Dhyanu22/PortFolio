import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const aboutSection = document.getElementById("about");
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (window.scrollY >= aboutSection.offsetTop) {
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }
});

window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");

  sections.forEach(function (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (sectionTop <= 50 && sectionBottom >= 50) {
          // Remove 'active' class from all links
          document.querySelectorAll("nav a").forEach(function (link) {
              link.classList.remove("active");
          });

          // Add 'active' class to the corresponding link
          const link = document.querySelector(`a[href="#${section.id}"]`);
          if (link) {
              link.classList.add("active");
          }
      }
  });
});
