// Calcs and enters time spent on page
function calctime() {	
	var t = setTimeout("calctime()",1000);
    document.getElementById("time").innerHTML="Seconds you spent viewing this page: " + t;
}

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

// Calculates and enters percent scrolled
window.onscroll = scroll;

function scroll() {
    var p = ((document.body.scrollTop / document.body.scrollHeight) * 100);
    document.getElementById("scroll-per").innerHTML="You have viewed " + p + "% of this page.";
}

// Calcs distance scrolled

function distance () {
	var d = (pageYOffset);
	document.getElementById("dist").innerHTML="You have scrolled " + d + " pixels.";
	console.log(pageYOffset)
}