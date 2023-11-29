//menu interaction, declaring showmenu and hidemenu functions, self explanatory
var navLinks = document.getElementById("navLinks");

function show_menu(){
  navLinks.style.right="0";
}

function hide_menu(){
  navLinks.style.right="-200px";
}




// Collasiple javascript code, unchanged used by all of them




//Back to top button script
let mybutton = document.getElementById("back-to-top-button");

// Shows the button when the user scrolls down 20px from the top of the screen
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// go to top when the button is clicked on
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}