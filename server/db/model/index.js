const { defineModel } = require('../index');
const CalculatorSchema = require('./calculator');

const CalculatorModel = defineModel('calculator', CalculatorSchema);

module.exports = {
    CalculatorModel
}
