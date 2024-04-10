// Sticky Navbar
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// JavaScript to toggle the display of the header list
document.getElementById('toggleIcon').addEventListener('click', function() {
  var headerList = document.getElementById('headerList');
  if (headerList.style.display === 'none' || headerList.style.display === '') {
    headerList.style.display = 'block';
  } else {
    headerList.style.display = 'none';
    }
  }
);

// Show scrool btn when scroll down
window.addEventListener("scroll", function () {
  let scrool = document.querySelector("#scrool-up");
  scrool.classList.toggle("srcl", window.scrollY > 600);
});

