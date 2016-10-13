// Hardcode the number
var num = 7;

// Ask user for a number
var number = prompt ("Enter a number to see if you win.")

// Alert user that number has been guessed correctly
if (Number(number) === num) {
	alert ("Great guess!  You win 50 Golden Tickets!");
}

// Alert user that number is too high
else if (Number(number) > num) {
	alert ("Too high. Guess again.");
}

// Alert user that number is too low
else {
	alert ("Too low.  Guess again.");
}


