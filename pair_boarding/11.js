function solution(string1,string2) {
    let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let str1Length = 0;
    let str2Length = 0;
    let i = 0;
    while(i < string1.length){
        if(!nums.includes(string1[i])){
            str1Length++;
            i++
        } else {
            let num = '';
            while (nums.includes(string1[i])){
                num += string1[i];
                i++;
                console.log(num)
            }
            str1Length += parseInt(num)
        }
       
    }
    return str1Length
}


function solution1(string1, string2) {
    let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let str1Bank = 0;
    let str2Bank = 0;
    let idx1 = 0;
    let idx2 = 0;
    while (idx1 < string1.length) {
        if (nums.includes(string1[idx1])) {
            let num = '';
            while (nums.includes(string1[idx1])) {
                num += string1[idx1];
                idx1++;
            }
            str1Bank += parseInt(num)
        }
        if (nums.includes(string2[idx2])) {
            let num = '';
            while (nums.includes(string2[idx2])) {
                num += string2[idx2];
                idx2++;
            }
            str2Bank += parseInt(num)
        }
    }
    return str1Length
}