const { fetchData } = require('../../utils/fetchData');
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