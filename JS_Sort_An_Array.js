function getIndexToIns(arr, num) {
	arr.sort(function(a, b) { // sort array smallest to largest for multiple digit integers
		return a - b;
	});
	for (var i = 0; i <= arr.length; i++) { // iterate the arrray comparing number to elements
		if (num <= arr[i] && i < arr.length) {
			console.log(i);
			return i; // return the index of insert locations
		} else if (i === arr.length) {
			console.log(arr.length);
			return arr.length;  // if num is to go at the end of the array, return the final spot, also length of array
		}
	}
}
getIndexToIns([2, 5, 10], 15);
