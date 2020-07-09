Modify original array while removing an duplicate items
O(n) time and O(1) space while returning the length of non duplicate times

iterate through the array once and swap values that are duplicates.

[1,2,2,3,6,8,8,9,9,9]=> 
[1,2,3,6,8,8,2,9,9,9]

[1,2,3,6,8,9,null,null,null,null] and return 6
[0,1,2,3]

function that takes in an array
    loop through all values
        inner loop to look for next distinct value;
        assign distinct value to previous value+1 Idx;
        increment count of distinct values;
    e

end