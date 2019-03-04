// 제너레이터 : 이터레이터를 만드는/리턴하는 함수 

// iterator는 Symbol.iterator 메서드를 가지고 있다. 
// Symbol.iterator 메서드를 호출 했을때 리턴 받는 값은 iterator자신이다. 
function *gen() {
    yield 1;
    if(false) yield 2;
    yield 3;
    return 100;
}
let iter5 = gen();

console.log( iter5 === iter5[Symbol.iterator]());   // true
console.log( iter5.next() );
console.log( iter5.next() );
console.log( iter5.next() );

for (const a of gen()) {
    console.log( a );
}


// 홀수만 리턴하는 generator 만들기
function *odds() {
    yield 1;
    yield 3;
    yield 5;
}

let iter2 = odds();

function *limit(l, iter) {
    for(const a of iter){
        yield a;
        if( a === l ) return;
    }
}
// 
function *infinity(i = 0) {
    while(true) yield i+=1;
}
function *odds2(num) { 
    for(const a of limit(num, infinity(0))) {
        if(a % 2) yield a;
        if(a == num) return;
    }
    for( let i = 0; i < num; i+=1 ){
        if( i % 2 ) yield i;
    }
}
let iter3 = odds2(100);

console.log( iter3.next() );
console.log( iter3.next() );
console.log( iter3.next() );
console.log( iter3.next() );
console.log( iter3.next() );
console.log( iter3.next() );

let infinity2 = infinity();
console.log(infinity2.next());


// for of, 전개 연산자, 구조 분해, 나머지 연산자
console.log(...odds(10));
console.log([...odds(19), ...odds2(20)]);

const [head, ...tail] = odds2(10);
console.log( head );
console.log( tail );

const [a, b, ...rest] = odds2(30);
console.log( a );
console.log( b );
console.log( rest );
//