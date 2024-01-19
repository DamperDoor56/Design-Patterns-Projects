const { Calculator } = require('./Calculator');

const calculator = new Calculator();
const multi = calculator.operation(1,2, 'multiplication');
console.log(multi)

const div = calculator.operation(10, 12, 'division');
console.log(div)