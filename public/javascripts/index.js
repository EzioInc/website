// Store navbar classes
var navClasses = document.getElementById('navbar').classList;
console.log(navClasses);

navClasses.add('visible')

function downAction() {
  navClasses.remove('collapse');
  navClasses.add('open');
}
  
function upAction() {
  navClasses.remove('open');
  navClasses.add('collapse');
}

var scrollTop = function() {
	return window.scrollY;
};

var scrollState = 0;

var scrollDetect = function() {
  // Current scroll position
  var currentScroll = scrollTop();
  if (scrollTop() === 0) {
    upAction();
  } else if (currentScroll > scrollState) {
    downAction();
  }
  // Set previous scroll position
  scrollState = scrollTop();
};

window.addEventListener("scroll", function() {
  scrollDetect();
});