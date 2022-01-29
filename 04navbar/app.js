
// add/remove certain class in classlist to implement function

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links") ;

navToggle.addEventListener("click", function(){
  links.classList.toggle("show-links");
  // toggle can add or remove automaticlly
});