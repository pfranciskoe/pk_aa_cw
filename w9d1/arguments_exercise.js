// function sum() {
//   let newArr = [...arguments]
//   let res = null;
//   for(i=0; i < newArr.length; i++) {
//     res += newArr[i];
//   };
//   return res
// }
// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);



Function.prototype.myBind = function (context) {
let that = this;
let args = [...arguments].slice(1); 
//   return () => this.apply(context,args);
return function() {
    args = args.concat([...arguments])
    that.apply(context,args)
}
  

}



// Function.prototype.myBind = function () {
// 
//   let context = arguments[0];
//   let args = [...arguments].slice(1); 
//    context.this(args) {
        
//    }
// }

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// debugger
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum(numArgs){
    let numbers = [];
     return function _curriedSum(num){
        numbers.push(num);
        if (numbers.length === numArgs){
            return numbers.reduce((acc,ele)=>acc = acc+ele);
        }
        else {
             return _curriedSum;
        };
    };
    // return _curriedSum;
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

//sumThree.curry(3)(4)(20)(6); // == 30

Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let that = this;
  return function _curried() {
    numbers = numbers.concat([...arguments]);
    if (numbers.length >= numArgs) {
        return that.apply(this,numbers.slice(0, numArgs));
    } else {
      return _curried;
    };
  }
}

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30