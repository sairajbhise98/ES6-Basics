// Get is used to fetch while Set is used to set the value

// example without get and set

class Person {
    constructor(name){
        this.name = name;
    }
    
    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }
}

let obj1 = new Person('Sairaj');
console.log(obj1.getName());
obj1.setName('LOKI');
console.log(obj1.getName())

// Example with get and set

class Person2 {
    constructor(name){
        this.name = name;
    }
    
    get Name(){
        return this.name;
    }

    set Name(name){
        this.name = name;
    }
}

let obj2 = new Person2('Sairaj');
console.log(obj2.Name);
obj2.Name = 'LOKI';
console.log(obj2.Name)