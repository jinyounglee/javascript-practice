// antipattern 
myname = "global";

function func() {
    console.log(myname);
    var myname = 'local';
    console.log(myname);
}   
func();


var i, myArray = [];
myArray.push({name: 'hello'});
myArray.push({name: 'hello2'});


for (i = myArray.length; i--;) {
    console.log( myArray[i].name );
}

var j = myArray.length;
while(j--) {
    console.log( myArray[j].name );
}

var man = {
    hands: 2, 
    legs: 2, 
    heads: 1
}

if( typeof Object.prototype.clone === 'undefined' ) {
    Object.prototype.clone = function() {};
}
/**
 * man 객체가 define 될때 prototyp의 clone method 역시 생성된다. 
 * hasOwnProperty로 filter를 줘서 man이 가지고 있는것만 print 한다. 
 */
for( var i in man ) {
    if( man.hasOwnProperty(i) ) {         // filter 
        console.log( i, man[i]);
    }
}

for( i in man ){
    if( Object.prototype.hasOwnProperty.call(man, i) ) {
        console.log(i, ":", man[i]);
    }
}


var global_var = 3;

global_novar = 2;
(function(){
    global_fromfunc = 3;
}());

// delete 시도 
console.log( delete global_var );  
console.log( delete global_novar );
console.log( delete global_fromfunc );


console.log( typeof global_var );
console.log( typeof global_novar);
console.log( typeof global_fromfunc );


