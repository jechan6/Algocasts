// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const hash = {};
    for(let char of stringA) {
        hash[char] = hash[char] + 1 || 1;
    }
    for(let char of stringB) {
        if(!hash[char]) return false;
        hash[char] -= 1;
        if(hash[char] === 0) delete hash[char];
    }
    if(Object.keys(hash).length > 0) return false;
    return true;
}

module.exports = anagrams;
