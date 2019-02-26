// Parent constructor 

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting 
Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');
console.log( person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
// 하지 않으면 Person Constructor로 생성 한다. 
Customer.prototype.constructor = Customer;

// Create Customer 
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
console.log( customer1);
console.log(customer1.greeting())

function Product(price, qunatity) {
    this.price = price;
    this.qunatity = qunatity;
    this.showDescription = function() {
        return `Price : ${this.price}, quantity : ${this.qunatity}`;
    }
}

const namecard = new Product(3000, 10000);

console.log( namecard.showDescription() );

function Namecard2 (price, quantity, tag) {
    Product.call(this, price, quantity);
    this.tag = tag;
};

Namecard2.prototype = Object.create(Product.prototype);
Namecard2.prototype.constructor = Product;
const newNameCard = new Namecard2(3000, 20000, 'TAG');

// newNameCard.constructor = Namecard2;

console.log( newNameCard.tag ); 