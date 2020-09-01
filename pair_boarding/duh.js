function solution(S, T) {
    let str1 = fillIn(S);
    let str2 = fillIn(T);
    console.log(S);
    console.log(str2);
    if (str1.length !== str2.length) return false;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === '1' || str2[i] === '1') {
            continue;
        }
        if (str1[i] !== str2[i]) {
            return false
        }
    }
    return true
}

function fillIn(string) {
    let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let output = []
    let i = 0;
    while (i < string.length) {
        if (!nums.includes(string[i])) {
            output.push[string[i]]
            i++
        } else {
            let num = ''
            while (!!nums.includes(string[i])) {
                num += string[i]
                i++
            }
            let number = parseInt(num)
            for (let j = 0; j < number; j++) {
                output.push['1']
            }
        }
    }
    return output
}
console.log(fillIn('asdfa22'))