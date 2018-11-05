// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, rows = 0, stairs = '') {
    if(n===rows) return;

    if(n === stairs.length) {
        console.log(stairs);
        return steps(n, rows + 1, '');
    }

    if(stairs.length <= rows) {
        stairs += "#"
    } else {
        stairs += ' ';
    }
    steps(n,rows,stairs);
    
}

module.exports = steps;
