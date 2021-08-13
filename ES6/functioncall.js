// Function call()

// we can use values of one object 
// into another object using 
// the call() method


let obj1 = {
    giveName: function(){
        console.log(this.firstName + ' ' + this.lastName);
    }
}

let obj2 = {
    firstName: 'Thor',
    lastName: 'Odinson'

}

obj1.giveName.call(obj2)