/**
 * Iterable을 실행 할때 
 */
const iterable = {
    [Symbol.iterator]: function() {
        let i = 4;
        console.log( i );
        return {
            next() {
                return i == 0  ? { done: true} : { value: i-- , done: false }
            },
            [Symbol.iterator]() {return this;}
        }
    }
};

let iterator2 = iterable[Symbol.iterator]();
console.log( iterator2.next() );
// console.log( iterator2.next() );
// console.log( iterator2.next() );
// console.log( iterator2.next() );
for ( const a of iterator2 ) {
    console.log(a)
};

const arr2 = [1, 2, 3];
let iter2 = arr2[Symbol.iterator]();

iter2.next();
for( const a of arr2 ) console.log(a);


// html element의 경우도 iterator iterable을 프로토콜을 따르고 있다.

// 전개연산자
const a = [3, 4];
// Symbol.iterable 메서드를 null로 바꾸면 사용할 수 없다. 
// a[Symbol.iterable] = null;
console.log([...a, ...[4,5]]);
