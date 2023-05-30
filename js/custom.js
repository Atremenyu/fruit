window.addEventListener('scroll', function() {
  var logo = document.querySelector('.logo');
  var scrollY = window.scrollY;
  logo.style.transform = 'rotate(' + scrollY / 100 + 'deg)';
});
