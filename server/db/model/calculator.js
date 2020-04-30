const { DataTypes } = require('sequelize');

module.exports = {
//   id: {type: DataTypes.UUID, primaryKey: true},
  age: { type: DataTypes.STRING },
  sex: { type: DataTypes.STRING },
  height: { type: DataTypes.STRING },
  weight: { type: DataTypes.STRING },
  creatine: { type: DataTypes.STRING },
};
