function confirmEnding(str, target) {

var match;
  
// find the substring at the end of the string equal to the length of the target
match = str.substring(str.length - target.length, str.length);
  
if (match == target){  // test if the 'match' substring = the target string or char
  console.log(true);   
  return true;
} 
else{
  console.log(false);
  return false;
}
  
}

confirmEnding("Bastian", "n");
