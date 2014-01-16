function showHide () {
	var ele = document.getElementById("metric-popup");
	if(ele.style.display == "none") {
		ele.style.display = "block" ;
	}
	else {
		ele.style.display = "none" ;
	};
};

function calctime() {	
	var t = setTimeout("calctime()",1000);
    document.getElementById("time").innerHTML="Seconds you spent viewing this page:" + t + " sec";
}

function view() {
	var v = ((_get_window_Yscroll() + _get_window_height()) / _get_doc_height() * 100);
	document.getElementById("scroll").innerHTML="You have viewed: " + v + "%";
	console.log(v)
}

