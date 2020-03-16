module.exports = function reverse (n) {
    let instr = String(Math.abs(n));
    let newString = '';
    for (let i = instr.length - 1; i >= 0; i--) {
        newString += instr[i];
    }
    return parseInt(newString);
}