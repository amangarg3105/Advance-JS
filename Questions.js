console.log(1 < 2 < 3);  //true
console.log(3 > 2 > 1);//false

/////////////////////////////////////////

console.log([] + 1);  // 1

/////////////////////////////////////////

var obj = {
    x: 1,
    getX: function () {
        return this.x;
    }
};

var globalGetX = obj.getX();

console.log(globalGetX);
console.log( obj.getX());  //1 1

/////////////////////////////////////////

console.log('Script start');
setTimeout(() => {
  console.log('setTimeout');
}, 0);
new Promise((resolve, reject) => {
    resolve('Promise resolved');
  }).then(res => console.log(res))
    .catch(err => console.log(err));
console.log('Script End');


/////////////////////////////////////////

console.log('Script start');
setTimeout(() => {
  console.log('setTimeout 1');
}, 0);
setTimeout(() => {
  console.log('setTimeout 2');
}, 0);
new Promise((resolve, reject) => {
    resolve('Promise 1 resolved');
  }).then(res => console.log(res))
    .catch(err => console.log(err));
new Promise((resolve, reject) => {
    resolve('Promise 2 resolved');
  }).then(res => console.log(res))
    .catch(err => console.log(err));
console.log('Script End');

// Script start
// Script End
// Promise 1 resolved
// Promise 2 resolved
// setTimeout 1
// setTimeout 2


/////////////////////////////////////////

var x = 3;

var foo = {
    x: 2,
    bar: {
        x: 1,
        baz: function() {
            return this.x;
        }
    }
}

var fbb = foo.bar.baz();

console.log( fbb);
console.log( foo.bar.baz());
//1
//1
//////////////////////////////////////////


function foo() {
    console.log( 1 );
    setTimeout(function() {
        console.log( 2 );
    }, 1000);
    setTimeout(function() {
        console.log( 3 );
    }, 0);
    console.log( 4 );
}
foo();
 // 1 4 3 2

/////////////////////////////////////////////


function sum( a, b ) {
    setTimeout(function() {
      console.log(a + b);
    }, 1000);


    // function nestingSum() {
    //   return a + b;
    // }

    // var total = nestingSum();
    // return total;
}
var total = sum(1,2);
console.log(total);

//undefined
//3



/////////////////////////////////////////////////

var x = 1;
function foo() {
    x = 10;
    return;
    function x() {}
}
foo();
console.log( x );


//1

/////////////////////////////////////////////////

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());  //IIFE
    }
};
myObject.func();
//
// outer func:  this.foo = bar
// outer func:  self.foo = bar
// [stdin]:10
//             console.log("inner func:  this.foo = " + this.foo);


//////////////////////////////////////////////////

console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);
//
// 122
// 32
// 02
// 112
// NaN2
// NaN

/////////////////////////////////////////////////////


(function(x) {
    return (function(y) {
        console.log(x);
    })(2) //IIFE
})(1);  //IIFE


//1

///////////////////////////////////////////////////////

/* Execute this on Browser */
var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);

//10 2


/////////////////////////////////////////////////////////////


var x = 21;
var girl = function () {
  console.log(x);
  var  x = 20;
};
girl ();

//Undefined

/////////////////////////////////////////////////////////////
 //
 console.log(typeof typeof 1);

//string

////////////////////////////////////////////////////////////

var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        console.log(b);
         var b = 3;
         console.log(b)
    }
    inner();
}
outer();

//NaN
//3


/////////////////////////////////////////////////////////////

/* Execute this on Browser */
(function () {
  let a = b = 3;
})();

console.log(b);
console.log(a);

//3
//Uncaught ReferenceError: a is not defined


/////////////////////////////////////////////////////////////

(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
})();
// 1 4 3 2

/////////////////////////////////////////////////////////////

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

function sum(x,y) {
  if(arguments.length == 2) {
    return x + y;
  } else {
    return function(y) {
      return x + y;
    }
  }
}

function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}

//5
//5

//////////////////////////////////////////////////////////////

var A = {
  x: function () {
    console.log('x');
  },
  y: function () {
    console.log('y');
  },
  z: function () {
    console.log('z');
  }
}
//
A.x().y().z(); //should print x , y, z
//x
// //A.x().y().z();
//      ^



/////////////////////////////////////////////////////////////////
//
/* Execute this on Browser */
 console.log(('String').__proto__.__proto__.__proto__);

//null  --> Prototype Chain

/////////////////////////////////////////////////////////////////
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    },
};

var stoleSecretIdentity = hero.getSecretIdentity;

stoleSecretIdentity.call(hero);

console.log(stoleSecretIdentity);
console.log(hero.getSecretIdentity());





/////////////////////////////////////////////////////////////////
var a = [1, 2, 3];

a[10] = 99;
console.log(a[6]);

//undefined
