var modal = document.getElementById("myModal");

var btn = document.getElementById("profile-btn");

let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');

btn.onmouseover = function() {
  modal.style.display = "block";
}

btn.onmouseout = function() {
  modal.style.display = "none";
}

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});