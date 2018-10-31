// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    str = str.split('');
    let left = 0;
    let right = str.length-1;
    while(left < right) {
        [str[left], str[right]] = [str[right], str[left]];
        left++;
        right--;
    }
    return str.join('');
}

// function reverse(str) {
//     return str.split('').reverse().join('');    
// }

module.exports = reverse;
