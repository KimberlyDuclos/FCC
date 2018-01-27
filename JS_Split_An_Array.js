function chunkArrayInGroups(arr, size) {  // split an array in the first argument by the number provided in the second argument

var chunk = [];  // needs to be array for .push function

for (var x=0; x<arr.length; x=x+size){  // go through array slicing by 'size' setting start pts and end pts
  chunk.push(arr.slice(x, x+size));
}

console.log(chunk);
return chunk;  // return final array in 'chunks'
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
