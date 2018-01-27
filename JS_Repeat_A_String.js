
function repeatStringNumTimes(str, num) {  // repeat the first argument string the number of times requested in the second argument

var resultString;
  
if (num <= 0){  // all 0/neg nums return empty string
  console.log("");
  return "";
}
else{
  resultString = str.repeat(num);  // repeat str for 'num' amount of times
}

console.log(resultString);
return resultString;
}

repeatStringNumTimes("abc", 3);
