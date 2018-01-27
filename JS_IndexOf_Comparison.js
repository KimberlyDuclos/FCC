function mutation(arr) {  // return 'true' if all the letters of the second element are in the first
 
var compare;
  
for (var x=0; x<arr.length; x++){  // loop to convert all of array to lowercase due to IndexOf case sensitivity
  arr[x] = arr[x].toLowerCase();
}
 
for (var i=0; i<arr[1].length; i++){  // loop each letter of second word to find match in first word
  compare = arr[0].indexOf(arr[1][i]);
  
  if (compare < 0){  // if a letter has no match, return false
    console.log(false);
    return false;
  }
}

console.log(true);
return true;  // if every letter can find a match, return true
  
}
mutation(["Zyxwvutsrqponmlkjihgfedcba", "Qrstu"]);
