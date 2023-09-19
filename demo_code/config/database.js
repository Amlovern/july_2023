module.exports = {
  development: {
    storage: process.env.DB_FILE, //location of our DB file
    dialect: 'sqlite', //specify RDBMS
    seederStorage: 'sequelize',
    benchmark: true, //prints execution time to terminal
    logQueryParameters: true, //print parameters with logged SQL
    typeValidation: true, //model-level data type validations
    // logging: false //print SQL to the terminal unless set to false
  }
}