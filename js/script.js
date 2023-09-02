/*JavaScript code by Hmabiola */
var body,html, nav;
body = document.body;
html = document.documentElement;
nav = document.getElementById('nav_nav');
window.onscroll = function () {scrollFunction()};
	
function scrollFunction() {
	if (body.scrollTop > 30 || html.scrollTop > 30) {
		nav.style.backgroundColor = "rgba(0,0,0,0.7)";
		nav.style.padding = "20px 5%";
	} else {
		nav.style.backgroundColor = "transparent";
		nav.style.padding = "30px 5%";
	}
}
function getM() {
	menu = document.getElementById('nav');
	if (menu.style.display === "none") {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}
}