// Javascript Apply method()

// We can apply method of 
// one object to the another object

obj1 = {
    giveName: function() {
        console.log('Hii ' + this.name);
    }
}

obj2 = {
    name: 'Sanki Coder'
}

obj1.giveName.apply(obj2);

// We can pass array as an argument

console.log(Math.max.apply(null, [2,3,4,2,88,44,109]));


