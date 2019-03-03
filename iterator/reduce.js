const log = console.log;

const nums = [1,2,3,4,5];
let total = 0;

for(const n of nums) {
    total = total + n;
}

log( total );


// 재귀적으로 누적된 합을 구해야 한다.
const reduce = (f, acc, iter) => {
    if( !iter ) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for( const a of iter ) {
        acc = f(acc, a);
    }
    return acc;
};

const add = (a, b) => a + b;
log(reduce(add, 0, [1, 2, 3, 4, 5]));
// log( add(add(add(add),1),2),3);

// Reduce를 사용해서 products의 모든 price의 합을 구한다.

const products = [
    {name: '반팔티', price: 24000},
    {name: '긴팔티', price: 44440},
    {name: '핸드폰케이스', price: 430000},
    {name: '후드티', price: 3000},
    {name: '바지', price: 4000},
];


var reduce2 = (f, acc, iter) => {
    for(p of iter) {
        acc = f(acc, p.price);
    }
    return acc;
};
var add2 = (a, b) => a + b;
var add3 = (total_price, product) => total_price + product.price;
console.log(reduce2(add2, 0, products));
console.log( reduce(add3, 0, products));

