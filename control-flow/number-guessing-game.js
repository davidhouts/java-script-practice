var num = 7;
var number = prompt ("Enter a number to see if you win.")

if (number > num) {
	alert ("Too high. Guess again.");
}

if (number < num) {
	alert ("Too low.  Guess again.");
}

if (number == num) {
	alert ("Great guess!  You win 50 Golden Tickets!");
}