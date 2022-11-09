const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sql12549897', 'sql12549897', 'hLUdMjrRs1', {
    host: 'sql12.freemysqlhosting.net',
    dialect: 'mysql'
  });
 const auth=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
 };
auth();
module.exports=sequelize;