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
            let currentIdx = length-1
            if
        }