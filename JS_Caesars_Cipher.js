function rot13(str) { // ciphers letters that are shifted by a set amount
	return str.split('').map.call(str, function(char) {  // split string to array and iterate with map function
		x = char.charCodeAt(0);  // set initial value to 0/65
		if (x < 65 || x > 90) { // determine if char is within range of letters
			return String.fromCharCode(x);
		} else if (x < 78) {  // add 13 if high
			return String.fromCharCode(x + 13);  // return string converted from unicode
		}
		return String.fromCharCode(x - 13); // subtract 13 if low
	}).join('');  // rejoin string
} 
rot13("SERR PBQR PNZC");
