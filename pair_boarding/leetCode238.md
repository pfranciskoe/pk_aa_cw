Input is and array of nums
    [2,3,1,4,5]
output[60,40,120,30,24]
[60,40,120,30,24]

input[1,3,0,3]
output = [0,0,9,0]
currentProduct = 1
function(array){
    output = new Array(array.length).fill(1)
    currentProduct = 1
    for (i=1; i < array.length; i++){
        currentProduct *= array[i-1]
        array[i] = currentProduct
    }
    currentProduct = 1
    same in opposite direction
    return output
}

function productExpectSelf(array){
    let output = new Array(array.length).fill(1);
    let currentProduct = 1;
    for (let i = 1; i < array.length; i++){
        currentProduct *= array[i-1];
        output[i] *= currentProduct;
    }
    currentProduct = 1;
    for (let j = array.length - 2; j >= 0; j--){
        currentProduct *= array[j+1];
        output[j] *= currentProduct;
    }
    return output
}