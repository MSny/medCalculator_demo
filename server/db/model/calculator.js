const { DataTypes } = require('sequelize');

module.exports = {
  age: { type: DataTypes.STRING },
  sex: { type: DataTypes.STRING },
  height: { type: DataTypes.STRING },
  weight: { type: DataTypes.STRING },
  creatine: { type: DataTypes.STRING },
  session: { type: DataTypes.STRING },
};
