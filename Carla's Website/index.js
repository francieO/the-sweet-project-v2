// const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");

// const app = express();

// // do i need?
// const https = require("https");
// const { isNull } = require("util");

// to be able to use static css styles and images (local to computer)
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

//sticky nav
const homeSection = document.querySelector("#home");
const menuSection = document.querySelector("#menu-section");
const navHeight = document
  .querySelector(".navbar1")
  .getBoundingClientRect().height;
console.log(navHeight);
const nav = document.querySelector(".navbar1");

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    nav.classList.remove("sticky");
  } else {
    nav.classList.add("sticky");
  }
};

const sectionObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  //   rootMargin: `-${navHeight}px`,
});

sectionObserver.observe(homeSection);
