const server = require('./src/app.js');
const { sequelize } = require('./src/db.js');

const PORT = 3001

//Sincronizando todos los modelos de la base de datos utilizando Sequelize. 
//Se eliminar todas las tablas existentes y se crearán nuevas tablas en la base de datos
 server.listen(PORT,()=>{
    sequelize.sync({force: true});
    console.log(`Sever rised in por ${PORT}`)
 })
