var highNumber = document.getElementById("hNum");
var lowNumber = document.getElementById("lNum");
var numofguess = document.getElementById("numofguess");
var guessed_number = document.getElementById("guessed_number");
var lowbutton = document.querySelector("#low");
var highbutton = document.querySelector("#high");
var guessleft = document.getElementById("guessleft");

var upinput = document.getElementById("upinput");
var lowinput = document.getElementById("lowinput");

var remguess = 0;
var upperlimitnumber;
var lowerlimitnumber;


init();

upinput.addEventListener("change", function(){
	// For giving new value from upinput to highnumber
	highNumber.textContent = upinput.value;
	init();
});
lowinput.addEventListener("change", function(){
	// For giving new value from lowpinput to lownumber
	lowNumber.textContent = lowinput.value;
	init();
});

lowbutton.addEventListener("click", function(){
	upperlimitnumber = guessed_number.textContent;
	guess();
});

highbutton.addEventListener("click", function(){
	lowerlimitnumber = guessed_number.textContent;
	guess();
});


// The Starting of the Game
function init(){
	upperlimitnumber = highNumber.textContent;
	lowerlimitnumber = lowNumber.textContent;
	upinput.value = highNumber.textContent;
	lowinput.value = lowNumber.textContent;
	numofguess.textContent = no_of_guesses();
	guessleft.textContent = numofguess.textContent;
	remguess = parseInt(numofguess.textContent);
	guessed_number.textContent = upperlimitnumber;
}

// Determine number of Guesses Required
function no_of_guesses(){
	var reqguesses = 0;
	for(var i = parseInt(highNumber.textContent); i >= parseInt(lowNumber.textContent);)
	{
		i = Math.floor((i + parseInt(lowNumber.textContent)) / 2);
		if(i === parseInt(lowNumber.textContent)){
			break;
		}
		reqguesses++;
	}
	return reqguesses + 1;
}

// Getting the number to be shown for GUESS
function guess(){
	console.log(guessleft.textContent = (--remguess).toString());
	guessed_number.textContent = Math.floor((parseInt(upperlimitnumber) + parseInt(lowerlimitnumber)) / 2);
}