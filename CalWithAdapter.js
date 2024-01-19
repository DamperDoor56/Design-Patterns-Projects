const { Calculator } = require('./NewCalculator');
const { CalculatorAdapter } = require('./CalculatorAdapter');

// adapter
const calcAdapter = new CalculatorAdapter();
const multiAdapter = calcAdapter.operation(2, 2, 'multiplication');
console.log(multiAdapter);

// calculator
const calculator = new Calculator();
const sum = calculator.mult(2,2);
console.log(sum);