/**Shows/hides pop-up div containing metrics but clicking on button*/
function showHide () {
	var ele = document.getElementById("metric-popup");
	if(ele.style.display == "none") {
		ele.style.display = "block" ;
	}
	else {
		ele.style.display = "none" ;
	};
}

// Calcs and enters time spent on page
function calctime() {	
	var t = setTimeout("calctime()",1000);
    document.getElementById("time").innerHTML="Seconds you spent viewing this page: " + t;
}

// Calculates and enters percent scrolled jquery
// function scroll() {
//     var p = ((document.body.scrollTop / document.body.scrollHeight) * 100);
//     document.getElementById("scroll-per").innerHTML="You have viewed " + p + " % of this page.";
//     console.log(p);
// }

// Calculates and enters percent scrolled 
function scroll () {
	var p = (window.pageYOffset/window.innerHeight * 100);
	document.getElementById("scroll-per").innerHTML="You have viewed " + p + " % of this page.";
	console.log(p);
}