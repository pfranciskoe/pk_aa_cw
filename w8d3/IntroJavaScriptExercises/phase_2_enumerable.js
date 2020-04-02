// Array.prototype.myEach = function(callback) {
//     for(i=0; i<this.length; i++) {
//         callback(this[i]);
//     }

// };

// arr.myEach((el)=>{
//     console.log(el + 1);
// }
// );

// Array.prototype.myMap = function(callback) {
//   let arr = [];
//   this.myEach((el) => {
//     arr.push(callback(el))
//   });
//   return arr;
// };

// [1, 2, 3, 4, 5, 6, 7].myMap((el)=> {
//   return (el + 1);
// });

// Array.prototype.myReduce = function(callback,initialValue) {
//     let arr = this;
//     if (!initialValue){
//         initialValue = arr[0];
//         arr = arr.splice(1,arr.length-1);
//     };
//     let acc = initialValue
//     arr.myEach((el) => {
//         acc = callback(el,acc);
//     });
//     return acc;
// };
// let ar1 = [1, 2, 3, 4, 5, 6, 7];

// add = function(el,acc) {
//     return el + acc;
// };

// console.log(ar1.myReduce(add));
