// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     let reversed = '';
//     let neg = n < 0 ? true: false;
//     n = Math.abs(n);
//     while(n > 10) {
//         reversed += (n % 10);
//         n = Math.floor(n/10);
//     }
//     reversed += n;
//     return neg ? - 1 * parseInt(reversed):parseInt(reversed);
// }
function reverseInt(n) {
    return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
}
module.exports = reverseInt;
