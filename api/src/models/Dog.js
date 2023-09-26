const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

//modelo dog(razas)
module.exports = (sequelize) => {
 sequelize.define(
  "Dog",
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
   image: {
    type: DataTypes.STRING,
    allowNull: false,
   },
   height: {
    type: DataTypes.STRING,
    allowNull: false,
   },
   weight: {
    type: DataTypes.STRING,
    allowNull: false,
   },
   life_span: {
    type: DataTypes.STRING,
    allowNull: false,
   },
  },
  { timestamps: false }
 );
};
