function largestOfFour(arr) { // return the largest number from each array

var number, largest;
var final = [];  // set final to an array that will hold largest number from each inner array
  
  for (var y=0; y<arr.length; y++){  // go through outer array
    largest = 0;  // reset largest to '0' after each inner array loop
    
    for (var x=0; x<arr[y].length; x++){  // go through inner array to find largest number of each
      number = arr[y][x];  // set var to value of current inner array element
      
      if (number >= largest){  // compare current element to current largest element
        largest = number;  // set var to largest element so far
      }       
    }  
        final.push(largest);  // push each largest number to array 'final'
  } 
  console.log(final); 
  return final;  // return 'final' array
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);  // input
