var img = document.querySelector('img');
var ind = -5;
var mode = "normal";
var images = ["couch.png","rainbow.png","pooping.jpg","eat.gif","yawn.jpeg"];
var excited = ["pug-tongue.jpg", "black-dog.jpg", "dance-dog.gif", "hamster.jpg", "excited-puppy.jpg", "dog-mouth.jpg","bull-dog.jpg","excited-panda.jpg", "butt.jpg","excited-bulldog.jpg","pizza.jpg", "excited-sloth.jpg"];

setInterval(nextImage, 1000);
function nextImage() {
	ind++;
	if (ind < 0) {
		return;
	}
	if (mode === "excited"){
		if (isPaused(myAudio)) {
			myAudio.pause();
			ind = -5;
			mode = "normal";
			document.getElementById("background").style.backgroundImage = "url(img/candles.jpg)";
			document.getElementById("background").style.backgroundSize = "100% 100%";
			document.getElementById("background").style.backgroundPosition = "center";
			return;
		}
		document.getElementById("background").style.backgroundImage = "url(img/" + excited[ind % excited.length] + ")";
		document.getElementById("background").style.backgroundSize = "100% 100%";
		document.getElementById("background").style.backgroundPosition = "center";
	} else {
		document.getElementById("background").style.backgroundImage = "url(img/" + images[Math.floor(ind / 7) % images.length] + ")";
		document.getElementById("background").style.backgroundSize = "100% 100%";
		document.getElementById("background").style.backgroundPosition = "center";
	}
}
var myAudio = document.getElementById("audio");
function isPaused(audelem) { return audelem.paused; }
function playMuteAudio() {
	if (myAudio.paused) {
		mode = "excited";
		ind += 5;
		myAudio.currentTime = 0;
		myAudio.play();
	}else {
		myAudio.pause();
		ind = -5;
		mode = "normal";
		document.getElementById("background").style.backgroundImage = "url(img/candles.jpg)";
		document.getElementById("background").style.backgroundSize = "100% 100%";
		document.getElementById("background").style.backgroundPosition = "center";
	}
}