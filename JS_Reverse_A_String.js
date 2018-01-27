function reverseString(str) {  
  
  str = str.split('').reverse().join(''); // split chars, reverse chars, join to str
  
  console.log(str);
  return str;  // return updated str
}

reverseString("hello");  // input
