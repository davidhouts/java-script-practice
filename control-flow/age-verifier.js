var age = prompt ("What is your age?");

if (age < 0) {
	alert ("Error.  You can't have a negative age.");
}

if (age === 21) {
	alert ("Happy 21! Free shot on us!");
}

if (age % 2 !== 0) {
	alert ("Your age is an odd number.");
}

if (age % Math.sqrt(age) === 0) {
	alert ("Your age is a perfect square.  Cool.");
}

else {
	alert ("Your age is " + age);
}