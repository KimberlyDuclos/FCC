function findLongestWord(str) {  // find the longest word in an array

var largest = 0;  // set initial largest word size to 0 for comparisons
  
str = str.split(" "); // split word list into an array to determine each word size

for (var x=0; x<str.length; x++){ // starting at first word, compare each word to next one, setting largest word to new largest size
  if (str[x].length >= largest){
    largest = str[x].length;
  } 
}

console.log(largest);
return largest;
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");
