const { fetchData } = require('../../utils/fetchData');
const { generateUuid } = require('../../utils/generateUuid');
const { CalculatorModel } = require('../../db/model/index')
const { createOrUpdate } = require('../../db/utils')

const { patientHeight, patientSexAgeUrl, patientWeight } = require('../../../constants')

const view = nextApp => async (req, res, next) => {
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
    
    nextApp.render(req, res, '/overview', {
        patientBirthDate,
        patientSex,
        patientHeightFormatted,
        patientWeightFormatted,
        uid
    });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res) => {
    try {
        const { uid, currentAge, currentSex, currentHeight, currentWeight, currentCreatine } = req.body;
        const testRecord = await createOrUpdate(CalculatorModel, 
            { id:uid }, {
            id:uid,
            age:currentAge.toString(),
            sex:currentSex,
            height:currentHeight.toString(),
            weight:currentWeight.toString(),
            creatine: currentCreatine.toString()
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: `ERROR-CREATING-RECORD = ${err}` });
    }
}

module.exports = {
    view, 
    create
}