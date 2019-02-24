//Object.prototype
// Person.prototype

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculate = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear - 1970);
    // }
}

Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function () {    
    // return this.firstName + ' ' + this.lastName;
    return `${this.firstName} ${this.lastName}`
}


//Gets Merried
Person.prototype.getMarried = function (newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '1990-02-12');
const mary = new Person('Mary', 'Jonhson', 'March 20 1978');

console.log( mary );

console.log( john );
console.log( john.calculateAge() );

console.log( mary.getFullName());

mary.getMarried('Smith');

console.log( mary.getFullName());

console.log( mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));
