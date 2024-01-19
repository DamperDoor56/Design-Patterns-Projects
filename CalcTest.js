const { Calculator } = require('./NewCalculator');

const calculator = new Calculator();
const sum = calculator.add(1,2);
console.log(sum);

const div = calculator.div(10,2);
console.log(div)