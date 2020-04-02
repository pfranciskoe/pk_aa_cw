// Array.prototype.uniq = function() {
//     let arr = [];
//     this.forEach(function(el){
//         if (!arr.includes(el)){
//         arr.push(el);}
//     });
//     return arr;
// };

// Array.prototype.twoSum = function() {
//   let arr = [];
  
//   for(i = 0; i < this.length; i++) {
//       for(j = i+1; j<this.length; j++) {
//             if(this[i] + this[j] === 0) {
//                 arr.push([i,j]);
//             }
//       }
//   }
//   return arr;
// };

// Array.prototype.transpose = function() {
//     let arr = Array.from(Array(this.length),()=> new Array(this.length));
   
//   for(i = 0; i < this.length; i++){
//     for(j = 0; j < this[i].length; j++){
//         arr[j][i] = this[i][j];
//     }
//   }
//   return arr; 
// }


