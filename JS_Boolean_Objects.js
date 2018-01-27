function bouncer(arr) {  // removes all falsy values from array

  var value;
  var output = [];  // has to be array for .push() function
  
  for (var x=0; x<arr.length; x++){  
      value = (Boolean(arr[x]));  // find Boolean value of each array element
      console.log(value)
    
    if (value == true){   // only output 'true' Boolean values
      output.push(arr[x]);
    }
  }  
return output;
}

bouncer([7, "ate", "", false, 9]);
