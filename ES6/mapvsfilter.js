// Map always the new array of same size and missing element as its original array
// Always return a new array, does not modify the original one
// We can handle the values of the array


arr = [12,2,3,42,1,3,4,32,];

m = arr.map(function(x){ return x*x/2; });
console.log(m);

// Filter 

// Always return a subset of original array
// This has predicate function --> the function which returns true or false
// If the value of the return value is true or convert is true, then that value is added to the subset

f = arr.filter(function(z){ return z >= 12 ; });
console.log(f)