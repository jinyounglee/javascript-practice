var f = {
    hello: 'hello', 
    speak : function() {
        console.log( this );
        console.log( this.hello );
    }
};
var o = {
    hello: '안녕' 
    // speak: function () {
    //     console.log( this.hello );
    // }
};

// console.log( o.speak() );

f.speak.call(o);

var example = function(a, b, c) {
    return this.a + this.b + this.c;
}

var examparam = {a: 3, b: 4, c: 5};

// console.log( example(1, 2, 3) );
example.call(null, examparam);









