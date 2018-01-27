function palindrome(str) { 

str = str.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');  // set all to lowerCase, remove all non-alphanumeric chars
var revStr = str.split('').reverse().join('');  // split, reverse, re-join chars of str
  
if (str == revStr){  // if str and its reverse are the name, it is a palindrome
    console.log(true)
    return true;
}
else{  // if str and its reverse are not true, it is not a palindrome
  console.log(false)
  return false;
}
}
palindrome("_eye");  // input string
