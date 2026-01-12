const sum = require('./File1.js');
const fileHandler = require('./fileHandler.js');

const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[3]);

if (!isNaN(num1) && !isNaN(num2)) {
  const result = sum(num1, num2);
  console.log(`La somme est : ${result}`);
  fileHandler(num1, num2, result);
} else {
  console.log('Veuillez entrer deux nombres valides.');
}
