// Stores only uniques values
// add() method to add the value

let set1 = new Set()
set1.add(1);
set1.add(2);
set1.add(3);
set1.add(4);

console.log(set1);

// delete() method to remove the element
set1.delete(2);
console.log(set1);

// has() method to check the value is present or not
console.log(set1.has(3)); 


