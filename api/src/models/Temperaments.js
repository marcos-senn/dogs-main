const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
 sequelize.define(
  'Temperament',
  {
   id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
   },
   name: {
    type: DataTypes.STRING,
    allowNull: false,
   },
  },
  { timestamps: false }
 );
};
