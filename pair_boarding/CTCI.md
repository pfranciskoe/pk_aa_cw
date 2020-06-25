// 1.1
    isUnique

    Determine if a string has all unique characters without using another data structure.

    input is 'easy'

    solution could be compare every character to every other character 
        O(n**2)time O(1)space.

    iterate throught the array once using a Set and adding each character to the array then checking against the Set.
        O(n)time O(n)space

// 1.2
    checkPermutations
        given two strings check if one is a permutation of the other.

        hash all of the character of one string and then subtract all of the characters from the second string
                'test' = {'t':2,'e':1,'s':1}
                then if any other letter either isnt in the hash or the related value === 0 then its not a permutation.
            O(n)time, O(n)space
        probably optimize with an early length check

        sort both strings then compare

            O(nlog(n))time
// 1.3
    URLify
        given a string
            'peter Is dope    '
        and a length of the "string"
            13
        return a URLified version of the string
            'peter%20Is%20dope'

        iterate throught the string, adding letter and or %20s depending on the string until it has the same length as the first string.
        function urlify(string){
            output = '';
            for(let i=0; i<string.length; i++){
                output += (string[i] === ' ') ? '%20' : string[i]
            }
            return output
        }            
        0(n) time(n being the length of the original) 0(n)space

        if its an array we could do this in constant space though

        function Urlify(array,length){
            let i = array.length;
            let currentIdx = length-1 + (zeroCount*2)
            let zeroCount = 0;
            for(let i = 0; i<length;i++){
                if (array[i]===0) zeroCount++;
            }
            while (currentIdx >= 0){
                if (array[currentIdx] === ' '){
                    array[i] = '0';
                    array[i-1] = '2';
                    array[i-2] = '%';
                    i = i - 3
                } else {
                    array[i] = array[currentIdx]
                    i--
                }
            }
            return array
        }

        //1.4 Palindrome Permutations
            Input = 'Tact Coa'
            Output = True (taco cat) atco cta
            
            Depending on number of non space characters there needs to either be and even number of every character or there needs to only be one odd:
            {t:2,c:2,a:2,o:1}
            toLowercase()
