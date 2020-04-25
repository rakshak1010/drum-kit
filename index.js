var buttons = document.querySelectorAll(".drum");

for(var i=0;i<buttons.length;i++){
	buttons[i].addEventListener("click", function () {
		var drum = this.innerHTML;
		sound(drum);
		animation(drum);
	});
}

document.addEventListener("keydown", function (event) {
	var code = event.key;
	sound(code);
	animation(code);
});

function sound(key){
	switch (key){
		case "w": var audio = new Audio('./sounds/tom-1.mp3');
				audio.play();
				break;
		case "a": var audio = new Audio('./sounds/tom-2.mp3');
				audio.play();
				break;
		case "s": var audio = new Audio('./sounds/tom-3.mp3');
				audio.play();
				break;
		case "d": var audio = new Audio('./sounds/tom-4.mp3');
				audio.play();
				break;
		case "j": var audio = new Audio('./sounds/snare.mp3');
				audio.play();
				break;
		case "k": var audio = new Audio('./sounds/crash.mp3');
				audio.play();
				break;
		case "l": var audio = new Audio('./sounds/kick-bass.mp3');
				audio.play();
				break;
		default: console.log(this);
				 break;
	}
}

function animation(key){
	document.querySelector("."+key).classList.toggle("pressed");

	setTimeout(function() {
		document.querySelector("."+key).classList.toggle("pressed");
	}, 200);
}