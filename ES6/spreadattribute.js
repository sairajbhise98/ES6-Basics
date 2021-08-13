// Example without spread attribute

let sum1 = (arr) => {
    console.log('This is function without spread attribute');
    console.log(arr);
    let sum = 0;
    for(let n of arr){
        sum += n;
    }
    return sum;
}

let arr = [10,20,30];
let x = [...arr];
Math.max(arr);

let a = [1];
let b = a;

let c = [...a]

// Example of the spread attribute
let sum2 = (...arr) => {
    console.log('This is function with spread attribute');
    console.log(arr);
    let sum = 0;
    for(let n of arr){
        sum += n;
    }
    return sum;
}

let ans1 = sum1([1,2,3,4,5,6,7,8,9]); // See here we have passed the array as the argument
let ans2 = sum2(1,2,3,4,5,6,7,8,9); // But here we just passed the numbers with comma seperated


// This can be also used reversly
console.log(Math.max(4,5,3,5,6,8)); // Returns the max value

//Math.max do not accept array as input, so lets use the spread attribute

let arrayx = [4,5,7,4,2,99];
console.log(Math.max(...arrayx));
