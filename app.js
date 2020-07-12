var toggler = document.getElementById("toggler");
var progressBar = document.getElementsByClassName("progress-bar");
toggler.onclick = function(){
	if(progressBar[0].style.display == "block"){
		progressBar[0].style.display = "none";
		document.getElementsByTagName("p")[0].innerHTML = "";
	}
	else {
		progressBar[0].style.display = "block";
		document.getElementsByTagName("p")[0].innerHTML = "Progress Started";
	}
};