// Its similar to array, but we can define our own indexes 
// It has key value pair


var newMap = new Map()
newMap.
newMap.set('name', 'Sairaj');
newMap.set('age', '23');
newMap.set('id', '76287');

const arr = [
    {'a':'1'}
]

arr.
//@todo diff bw map/filter

console.log('get method used', newMap.get('name'));

// we can also use map.keys() to get keys and map.values() to get values 
// this always return array of value
// therefore we can iterate over it

for(let k of newMap.keys()){
    console.log(k);
}

for(let v of newMap.values()){
    console.log(v);
}

// lets see key value pair

for(let [k, v] of newMap){
    console.log(k + ' ' + v);
}
