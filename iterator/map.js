const products = [
    {name: '반팔티', price: 24000},
    {name: '긴팔티', price: 44440},
    {name: '핸드폰케이스', price: 430000},
    {name: '후드티', price: 3000},
    {name: '바지', price: 4000},
];

// map 
let names = [];
for( const p of products ){
    names.push(p.name);
}

console.log( names );

let prices = [];
for(const p of products ){
    prices.push(p.price);
}
console.log(prices);

const map = (f, iter) => {
    let res = [];
    for(const a of iter) {
        res.push(f(a));
    }
    return res;
}

console.log( map(p => p.name, products) );
console.log( map(p => p.price, products ));


// 이터러블 프로토콜을 따른 map의 다형성 

function *gen() {
    yield 2;
    if(false) yield 3;
    yield 4;
}

console.log( map(a => a * a, gen()));

let m = new Map();
m.set('a', 10);
m.set('b', 20);

const it = m[Symbol.iterator]();
console.log( it.next() );

console.log( new Map(map(([k, a]) => [k, a * 2], m)))
;
let ttt = new Map(map(([k, a]) => [k, a * 2], m));

console.log( ttt.get("b"));

const under20000 = [];
for( const p of products ){
    if( p.price < 20000) {
        under20000.push(p);
    }
} 

console.log( ...under20000 ); 

let over20000 = [];
for( const p of products) {
    if( p.price > 20000) {
        over20000.push(p);
    }
}
console.log( ...over20000 );

const filter = (f, iter) => {
    let res = [];
    for( const p of iter) {
        if(f(p)) {
            res.push(p);
        }
    }
    return res;
}
console.log( ...filter(p => p.price > 20000, products));

// 즉시 실행 함수 
console.log( ...filter(p => p % 2, function *(){
    yield 1;
    yield 2;
    yield 3;
}()));

