function destroyer(arr) { // function to remove array elements that match the given numbers
  var args = Array.prototype.slice.call(arguments);  // convert arument into array - for loop better for optimization

  for (var i = 0; i < arr.length; i++) {  // argument array iteration
    for (var j = 0; j < args.length; j++) {  
      if (arr[i] === args[j]) {  // compare arguments in first element to arguments in latter elements
        console.log(arr[i])
        delete arr[i];  // remove the arguments that match
      }
    }
  }
  return arr.filter(Boolean);  // return remaining elements filtered for false (if not deleted above)
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
