// class Clock {
//     constructor() {
//         let date = new Date();
//         this.hour = date.getHours();
//         this.minute = date.getMinutes();
//         this.second = date.getSeconds();
//         this.printTime();
//         setInterval(this._tick.bind(this), 1000);
//     }

//     printTime() {
//         console.log(`${this.hour}:${this.minute}:${this.second}`);
//     }

//     _tick() {
//         this.second++;
//         if (this.second === 60){
//             this.minute++;
//             this.second = 0;
//         };
//         if (this.minute === 60) {
//             this.hour++;
//             this.minute = 0
//         };
//         if (this.hour === 25) {
//             this.hour = 0;
//         };
//         this.printTime();
//     }
// }

// const clock = new Clock();



// const readline = require("readline");

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// // function addNumbers(sum,numsLeft,completionCallback) {
// //     if (numsLeft > 0) {
// //         reader.question("input a number",function(input){
// //             let parsed = parseInt(input);
// //             console.log(sum+=parsed);
// //             numsLeft -= 1;
// //             addNumbers(sum,numsLeft, completionCallback)
// //         })
// //     };
// //     if (numsLeft === 0) {
// //         completionCallback(sum);
// //     };
// // };

// // addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));



// function askIfGreaterThan(el1, el2, callback) {
//     reader.question(`Is ${el1} > ${el2}?`, function(input){
//         return (input === "yes" ? callback(true) : callback(false));
//     });
// }

// // askIfGreaterThan(1,2,function(input){console.log(input)})

// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//     // Do an "async loop":
//     // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
//     //    know whether any swap was made.
//     // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
//     //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
//     //    continue the inner loop. You'll want to increment i for the
//     //    next call, and possibly switch madeAnySwaps if you did swap.
//     if (i === arr.length - 1) {
//         return outerBubbleSortLoop(madeAnySwaps);
//     } else {
//         askIfGreaterThan(arr[i], arr[i+1], function(input){
//             if (input === true) {
//                 [arr[i], arr[i + 1]] = [ arr[i + 1], arr[i]];
//                 madeAnySwaps = true;
//             }
//             i++;
//             return innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
//         })
//     };
   
// }
// innerBubbleSortLoop([4, 2, 4], 0, false, function() {console.log('In outer bubble sort')})
// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

// function absurdBubbleSort(arr, sortCompletionCallback) {
//     function outerBubbleSortLoop(madeAnySwaps) {
//         // Begin an inner loop if you made any swaps. Otherwise, call
//         // `sortCompletionCallback(arr)`.
//         if (madeAnySwaps === true) {
//            return  innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
//         }else {
//             return sortCompletionCallback(arr);
//         };
//     }
//     outerBubbleSortLoop(true);
//     // Kick the first outer loop off, starting `madeAnySwaps` as true.
// }

// absurdBubbleSort([3, 2, 1], function (arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
// });




Function.prototype.myBind = function(context){
    // take "this" (this will be a function). 
    // call "this" on context.
    return () => {this.apply(context)};
}



// class Lamp {
//     constructor() {
//         this.name = "a lamp";
//     };
// };

// const turnOn = function () {
//     console.log("Turning on " + this.name);

// };

// const lamp = new Lamp();
// // turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"


let tooSoon = false;

Function.prototype.myThrottle = function(int){
    let resetTooSoon = function() { tooSoon = false;};
    if (tooSoon === false){
        debugger
        tooSoon = true;
        setTimeout(resetTooSoon, int);
        return (tooSoon) => { this()};
    };
};
class Neuron {
    fire() {
        console.log("Firing!");
    }
}

const neuron = new Neuron();
// When we create a new Neuron,
// we can call #fire as frequently as we want

// The following code will try to #fire the neuron every 10ms. Try it in the console:
// const interval = setInterval(() => {
//     neuron.fire();
// }, 10);

// You can use clearInterval to stop the firing:
// clearInterval(interval);

// Using Function#myThrottle, we should be able to throttle
// the #fire function of our neuron so that it can only fire
// once every 500ms:

neuron.fire = neuron.fire.myThrottle(5000);

const interval = setInterval(() => {
    neuron.fire();
}, 10);

// This time, if our Function#myThrottle worked correctly,
// the Neuron#fire function should only be able to execute
// every 500ms, even though we're still trying to invoke it
// every 10ms!

// If we want this behavior for ALL neurons, we can do the same logic in the constructor:

// class Neuron {
//     constructor() {
//         this.fire = this.fire.myThrottle(500);
//     }

//     fire() {
//         console.log("Firing!");
//     }
// }