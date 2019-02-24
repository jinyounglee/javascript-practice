const brad = {
    name: 'Brad', 
    age: 30

}

console.log(brad);
console.log(brad.age);

/** multiple instruct */
// constructor //#endregion
// Person Constructor

function Person(name, age, dob) {
    this.name = name;
    this.age = age;
    //console.log( this );
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


console.log(this);
const brad2 = new Person('Brad', 30);
const john = new Person('John', 20);
// console.log( brad2 );
// console.log( john );

const brad4 = new Person('Brad', 32, '1988-02-31');
console.log( brad4.calculateAge() );


// String 

const name1 = 'Jeff';


// Object로 받는다. 
const name2 = new String('Jeff');
console.log( name1, name2);

name2.foo = 'bar';
console.log( name2 );
console.log( typeof name1, typeof name2 );

if(name2 === 'Jeff') { // name2.toString() 
    console.log('YES')
} else {
    console.log('No');
}

// Number 
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2);

const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool2);

// Function
const getSum1 = function(x, y) {
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

console.log( getSum1(1, 2) );
console.log( getSum2(1, 2) );


const john2 = {name: "John"};
const john3 = new Object({name: "John"});
console.log( john2);
console.log( john3);

// Arrays 
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log( arr1 );
// Regular Expresssions 
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log( re2)






