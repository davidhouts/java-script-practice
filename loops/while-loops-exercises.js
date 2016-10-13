//Print all numbers between -10 and 19
console.log("PRINTED NUMBERS BETWEEN -10 AND 19");
var numbers = -10;

while (numbers < 20) {
	console.log(numbers);
	numbers++;
}
//Print all even numbers between 10 and 40
console.log("PRINTED EVEN NUMBERS BETWEEN 10 AND 40");
var numbers = 10;

while (numbers <= 40) {
	console.log(numbers);
	numbers+= 2;
}
//Print all odd numbers between 300 and 333
console.log("PRINTED ODD NUMBERS BETWEEN 300 AND 333");
var numbers = 300;

while (numbers <= 333) {
	if (numbers % 2 !== 0) {
		console.log(numbers);
	}
		numbers+= 1;
}
//Print all numbers divisible by 5 and 3 between 5 and 50
console.log("PRINTED NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");

var numbers = 5;
while (numbers <= 50) {
	if (numbers % 3 === 0 && numbers % 5 === 0) {
		console.log(numbers);
	}	
	numbers+= 1;
}