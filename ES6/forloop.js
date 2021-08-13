// we have traditional for loop

let names = ['Sai', 'Ravi', 'Pruthvi', 'Shreya', 'Shraddha'];

// Old for loop
console.log('Old for loop.')
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// new for loop
console.log('New for loop.');
for(let n of names){
    console.log(n);
}

// This for loop will return indexes of the elements
console.log('My try.');
for(let n in names){
    console.log(n);
}