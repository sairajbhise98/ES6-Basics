// Old Syntax
function oldOne(){
    console.log('This function is OLD');
}

// New one | Arrow function
newOne = () =>{
    console.log('This is kinda New');
}

oldOne();
newOne();

// We can also pass the parameters 
let name = (first, last) => {
    this.first = first;
    this.last = last;

    console.log('Hii ' + first + ' ' + last);
}

name('Sairaj', 'Bhise');

//