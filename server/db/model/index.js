const { defineModel } = require('../db');
const CalculatorSchema = require('./calculator');
const CalculatorModel = defineModel('calculator', CalculatorSchema);

module.exports = {
    CalculatorModel
}
