const numbers = [22,123,53,239,32,32];
const numbers2 = new Array(22,33,44,5532,23,23,23);
const fruits = ['Apple', 'Banna', 'Orange'];
const mixed = [22, 33, 'hello', true, undefined, null, {a: 1, b: 1}, new Date()];

console.log( mixed );

let val;
// array length 
val = numbers.length;
val = Array.isArray('333');
val = numbers[3];
val = numbers[0];
// Insert into array 
numbers[3] = 2000;

//Find index of value 
val = numbers.indexOf(2000);

// MUTATING ARRAYS
// add on to end 
numbers.push(230000);
// add on to front 
numbers.unshift(100000000);
// take off from end 
numbers.pop();
// take off from front 
numbers.shift();

// splice values //#endregion
numbers.splice(1, 3);
// Reverse //#endregion
numbers.reverse();

// Concatenate PropTypes.array,
val = numbers.concat(numbers2);
// Sorting arrays;
val = fruits.sort();
val = numbers2.sort();

// Use compare function //#endregion
val = numbers2.sort(function(x, y){
    return x - y;
});

// Reverse sort 
val = numbers2.sort(function(x, y){
    return y - x;
});

// Find //#endregion
function under50(num){
    return num < 40;
}

val = numbers2.find(under50);

console.log( numbers );
console.log( val );