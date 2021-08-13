let a = 10;
if (true) {
    let a = 40;
    console.log(a); //40
}
console.log(a); // 10

// Second Example
let q = 50;
let b = 100;
if (true) {
    let q = 60;
    var c = 10;
    console.log(q/c); // 6
    console.log(b/c); // 10
}
console.log(c); // 10
console.log(q); // 50