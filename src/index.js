module.exports = function reverse (n) {
let i = 0;
let result = '';
let resultNumber = '';  

let m = Math.abs((n));

while (i < m.toString().length) {
    resultNumber = m.toString()[i];
    result = `${resultNumber}${result}`;
    i = i + 1;
}

return result;

}
