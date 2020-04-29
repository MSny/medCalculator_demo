const { DataTypes } = require('sequelize');

module.exports = {
  id: { type: DataTypes.STRING, allowNull: false },
  sex: { type: DataTypes.STRING },
  height: { type: DataTypes.STRING },
  weight: { type: DataTypes.DECIMAL },
  creatine: { type: DataTypes.DECIMAL },
  sessionId: { type: DataTypes.DECIMAL },

  pg_created_at: { type: DataTypes.DATE },
  pg_updated_at: { type: DataTypes.DATE },
};
