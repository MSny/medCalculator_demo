const { fetchData } = require('../../utils/fetchData');
const { generateUuid } = require('../../utils/generateUuid');
const { CalculatorModel } = require('../../db/model/index')
const { patientHeight, patientSexAgeUrl, patientWeight } = require('../../../constants')

module.exports = nextApp => async (req, res, next) => {
  try {
    const sessionId = req.session.id;
    const patientSexAge = await fetchData({
        url: patientSexAgeUrl,
        method: 'GET',
    });
    const patientWeightInfo = await fetchData({
        url: patientWeight,
        method: 'GET',
    });
    const patientHeightInfo = await fetchData({
        url: patientHeight,
        method: 'GET',
    });
    
    const patientBirthDate = patientSexAge.birthDate;
    const patientSex = patientSexAge.gender;
    const patientHeightFormatted = patientHeightInfo.entry[0].resource.valueQuantity.value;
    const patientWeightFormatted = patientWeightInfo.entry[0].resource.valueQuantity.value;
    const uid = generateUuid();
    // const testRecord = await CalculatorModel.create({
    //     id:uid,
    //     age:patientBirthDate,
    //     sex:patientSex,
    //     height:patientHeightFormatted,
    //     weight:patientWeightFormatted,
    //   });
    // get user and all the data needed on the overview page
    nextApp.render(req, res, '/overview', {
        patientBirthDate,
        patientSex,
        patientHeightFormatted,
        patientWeightFormatted,
        sessionId
    });
  } catch (err) {
    next(err);
  }
};

// const create = async (req, res) => {
//     try {
//         const { customer, ga: analytics, project, noPaintMargin } = req.body;
//         const user = await findOrCreateUser(customer);