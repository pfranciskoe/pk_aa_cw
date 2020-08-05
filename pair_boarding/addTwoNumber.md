given two strings representing floats
add two strings together
CANNOT convert whole strings and add


approach
    figure out how the digits of the strings line up with eachother.
    for each string I'll set the decimal point at the end by default.
    I'll search for a decimal to replace the default if its a float.

    '12342.34'
    '213241.342'
    find index of decimal
    decimal1 = 3
    decimal2 = 4
     '12342.340'
    '213241.342'
    find decimal in both
    iterated backwards through both strings keeping track of a remainer at each step;
    st1[pointer] +
    str1[pointer] +
    remainder
    ------------------
    
    
    then increment pointers


function(num1,num2){
    function findDecimalIndex(num){

    }
    dec1 = findDecimalIndex(num1)
    dec2 = findDecimalIndex(num2)
    if dec1 > dec2 {
        for(dec1 - dec2 times){
            num1+=0
        }
    } else if dec2 > dec1 {
        for(dec2 - dec21 times){
            num2+=0
        }
    }
    toss zeros onto front
    // now i have even numbers
    idx = num1.length - 1
    remainder = 0;
    result = ''
    while idx1 >= 0 {
        if (num1[idx] === '.'){
            result = '.' + result
            continue;
        }
        int1 = ParseInt(num1[idx]);
        int2 = ParseInt(num2[idx]);
        newChar = int1 + in2 + remainder;
        remainder = newChar >= 10 ? 1 : 0;
        result = result + (newChar % 10);
        idx++
    }
    return remained + result
}