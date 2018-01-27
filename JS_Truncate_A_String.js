function truncateString(str, num) {  // truncate string if it is longer than the number in the second argument

var truncStr; 

if (num <= 3){  // if the number is less than 3, truncate with '...' - no need to reduce chars to add '...'
  console.log(str.slice(0,num) + "...");
  return str.slice(0, num) + "...";
}

if (num > 3 && num < str.length){  // if the number is greater than 3 and less than str length, truncate with '...'
  console.log(str.slice(0, num-3) + "...");
  return str.slice(0, num-3) + "...";
}

if (num >= str.length){  // if the number is greater or equal to the str length, do not truncate
  console.log(str);
  return str;
}

}


truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
