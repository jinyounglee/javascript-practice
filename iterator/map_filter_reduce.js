const products = [
    {name: '반팔티', price: 24000},
    {name: '긴팔티', price: 44440},
    {name: '핸드폰케이스', price: 430000},
    {name: '후드티', price: 3000},
    {name: '바지', price: 4000},
];

const reduce = (f, acc, iter) => {
    if( !iter ) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for(a of iter) {
        acc = f(acc, a);
    }
    return acc;
};
console.log(reduce((a, b) => a + b.price, 0, products));

const map = (f, iter) => {
    let rtnArr = [];
    for(a of iter) {
       rtnArr.push(f(a));
    }
    return rtnArr;
};

const filter = (f, iter) => {
    let res = [];
    for( a of iter ) {
        if( f(a) ){
            res.push(a);
        }
    }
    return res;
};

const add = (a, b) => a + b;

console.log( reduce( add
                  , map( p => p.price
                  , filter(p=>p.price < 20000
                  , products))) );

console.log(reduce(
    add,
    map(p => p.price, products)));

// 코드를 값으로 다루어 표현력 높이기
// go, pipe
const go = (...args) => reduce((a, f) => f(a), args);
const pipe = (...fs) =>
    (a) =>
        go(a, ...fs);
go(
    0,
    a => a + 1,
    a => a + 10,
    a => a + 100,
    a => console.log(a)
);
const f = pipe(
  a => a + 1,
  a => a + 10,
  a => a + 100
);
console.log(f(0));
