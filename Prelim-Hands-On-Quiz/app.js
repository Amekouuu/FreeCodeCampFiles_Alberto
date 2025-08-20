const { add, subtract, multiply, divide } = require('./calculation.js');

// Inputs
const hourlyRate = 300;
const hoursPerDay = 4;
const daysWorked = 6;

// Calculations
const grossIncome = multiply(multiply(hourlyRate, hoursPerDay), daysWorked);
const tax = divide(grossIncome, 10); // 10% tax
const sss = 1200;
const pagibig = 300;
const philHealth = 400;

const totalDeductions = add(add(add(tax, sss), pagibig), philHealth);
const netSalary = subtract(grossIncome, totalDeductions);

// Output
console.log('The gross income is:' + grossIncome);
console.log('Tax:' + tax);
console.log('SSS: ' + sss);
console.log('Pag-Ibig: ' + pagibig);
console.log('PhilHealth: ' + philHealth);
console.log('Total deductions: ' + totalDeductions);
console.log('Net Salary: ' + netSalary);
