function slasher(arr, howMany) {  // return the remaiming elements of an array after chopping off "n" elements

var removed = arr.splice(howMany); // splice removes as many chars equal to number provided/store in howMany

console.log(removed);
return removed;
}

slasher([1, 2, 3], 2);
