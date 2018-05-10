function factorialize(num) {  
  
  var newNum = 1;  // set var to initial number
  var n = 1;    // set var to user input number
  
  if (num <= 1){  // if statement setting 0 to 1
    console.log(1);
    num = 1;
    return num;
  }
  
  for (var x=2; x<=num; x++){  // for loop to num input, going no bigger than input num
    n = newNum * x;  // * smallest number by next number
    newNum = n;  // reassign var to hold new product created in line above
  }
  console.log(newNum);
  return newNum;  // return value of newNum after for loop concludes
}

factorialize(5);  // input
