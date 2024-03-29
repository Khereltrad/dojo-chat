const { hasMany,belongsTo } = require('sequelize');
const Sequelize = require('sequelize');
const sql = new Sequelize('chat-dojo', 'root','Mirune.1812#265464', { host: 'localhost', dialect: 'mysql'});

const TbUsuario = sql.define('Usuarios',{
   // nickname,name,lastname,rol,email, password
   id:         {type: Sequelize.INTEGER ,primaryKey: true,autoIncrement:true},
   nickname:   {type: Sequelize.STRING,allowNull:false,unique:true,validate:{notNull:{msg:'Debe ingresar un Apodo'},len:{args:[4],msg:'El largo del apodo(nick) debe ser de al menos 4 digitos'}}},
   name:       {type: Sequelize.STRING,allowNull:false,validate:{notNull:{msg:'Debe ingresar un Nombre'},len:{args:[3],msg:'El largo del nombre debe ser de al menos 3 digitos'}}},
   lastname:   {type: Sequelize.STRING,allowNull:false,validate:{notNull:{msg:'Debe ingresar un Apellido'},len:{args:[4],msg:'El largo del apellido debe ser de al menos 4 digitos'}}}, 
   rol:        {type: Sequelize.STRING,allowNull:false,defaultValue:"Normal"},
   email:      {type: Sequelize.STRING,allowNull:false,unique:true,validate:{notNull:{msg:'Debe ingresar un Email'},len:{args:[6],msg:'El largo del correo debe ser de al menos 6 digitos'},isEmail:{msg:'Favor revise si el correo este bien escrito'}}},
   password:   {type: Sequelize.STRING,allowNull:false,validate:{notNull:{msg:'Debe ingresar una Contraseña'},len:{args:[6],msg:'El largo de la contraseña  debe ser de al menos 6 digitos'}}}         
},{ timestramps: true });

const TbMensaje = sql.define('Mensaje',{
   id:         {type: Sequelize.INTEGER ,primaryKey: true,autoIncrement:true},
   message:    {type: Sequelize.STRING,allowNull:false,validate:{notNull:{msg:'Falta ingresar su mensaje'},len:{args:[1]}}},
},{ timestramps: true });

TbUsuario.hasMany(TbMensaje)
TbMensaje.belongsTo(TbUsuario)

sql.sync().then(() =>{console.log('Tabla TbUsuario t TbMensaje sincronizada');});
module.exports = { TbUsuario,TbMensaje};