// //conectando com o banco de dados (MySQL)
// const path = require("path");
// const { PATH_DB } = require("dotenv").config().parsed;
// const { Database } = require("mysql");
// const db = new Database(path.resolve() + PATH_DB);
// module.exports = db;

// // module.exports = new Database(path.resolve() + PATH_DB);

// const { TRBV_OIDEVS, DATABASE_USERNAME, DATABASE_PASSWORD, HOST_DB, PORT_DB, NAME_DB } = require("dotenv").config().parsed;
// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(`${DIALECT}://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${HOST_DB}:${PORT_DB}/${NAME_DB}`);

// sequelize
//     .authenticate()
//     .then(() => console.log(`Conectado ao Postgres!`))
//     .catch(() => console.log(`Falha na conexão ao banco de dados...`))

// module.exports = sequelize;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'trbv_oidevs',
 'root',
 'root',
  {
    host: "localhost",
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

 sequelize.sync().then(() => {
    console.log('Table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table: ', error);
 });
 
 module.exports = sequelize;