function titleCase(str) {  // capitalize the first letter in each word of the provided string
  
str = str.toLowerCase().split(" "); // change all to lowercase, split to array of chars
var upper = [];  // upper needs to be an array for functions to work

for (var x=0; x<str.length; x++){
  // push each word with first letter to uppercase plush the lowercase substring of remaining lowercase chars in each word
  upper.push(str[x].charAt(0).toUpperCase() + str[x].substr(1, str[x].length));
}  

str = upper.join(" ");  // re-join array to str
  
  console.log(str);
  return str;  // return joined str
}

titleCase("I'm a little tea pot");  // input
