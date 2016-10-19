//To test for even and odd numbers
function isEven(num) {
	if(num % 2 === 0) {
		return true;
	}
	return false;
}
// Shortened boolean version
//function isEven(num) {
//	return num % 2 === 0; 
//}

// To test factorials
function factorial(num){
	// define result variable
	var result = 1;
	// calculate factorial and store value in result
	for(var i = 2; i <= num; i++){
		result *= i;
	}
	// return result variable
	return result;
}

// To discover and use the replace string method
function kebabToSnake(str){
// replace all dashes with underscores
    var myString = str.replace(/-/g, "_");
    //return str
    return myString;
    //try with: "hello-world";
}


