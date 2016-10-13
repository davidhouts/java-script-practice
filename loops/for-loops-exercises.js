//Print all numbers between -10 and 19
console.log("PRINTED NUMBERS BETWEEN -10 AND 19");

for(i = -10; i < 20; i++) {
	console.log (i);
}

//Print all even numbers between 10 and 40
console.log("PRINTED EVEN NUMBERS BETWEEN 10 AND 40");

for(i = 10; i <= 40; i++) {
	console.log (i);
}
//Print all odd numbers between 300 and 333
console.log("PRINTED ODD NUMBERS BETWEEN 300 AND 333");

for(i = 300; i <= 333; i+= 1) {
	if(i % 2 !== 0) {
	console.log (i);
	}
}
//Print all numbers divisible by 5 and 3 between 5 and 50
console.log("PRINTED NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");

for(i = 5; i <= 50; i+= 1) {
	if(i % 3 === 0 && i % 5 === 0) {
	console.log (i);
	}
}