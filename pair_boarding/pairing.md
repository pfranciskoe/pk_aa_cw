find k closest elements.

inputs:
    arr = sorted arr of positive and negative integers.
    k = number of elements to find.
    x = target value.
brute force:
    store elements in an array with element as key and proximity as value
    return first k elements of object sorted by value

arr = 
[1,2,3,5,5,8,8,9,10] 
k = 4
x = 5
output[e,e,e,e]
right = 3
left = 2

iterate through array until ele is greater than x
set two pointers
while output < k
    left < 0 ? Infinity : arr[left]
    check if right is closer than left, if so add right into output.
    else
    add left into output
end
return output

  let output = [];
    let leftIdx = arr.length - 1;
    let rightIdx = arr.length - 2;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < x){
            leftIdx = i;
            rightIdx = i - 1;
        }
    }
    while (output.length < k){
        let leftNum = Infinity;
        let rightNum = Infinity;
        if (leftIdx < arr.length){
            leftNum = arr[leftIdx]
        }
        if (rightIdx >= 0 ){
            rightNum = arr[rightIdx]
        }
        let leftDistance = Math.abs(x-leftNum);
        let rightDistance = Math.abs(x-rightNum);
        if (rightDistance < leftDistance){
            output.push(rightNum);
            rightIdx++;
        } else {
            output.push(leftNum);
            leftIdx--;
        }
    }
    return output
}
[1,2,3,4] k = 3, x = 5
[1,2,3,4] k = 3, x = -1
