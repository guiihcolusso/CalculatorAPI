const Sequelize = require ('sequelize')

const sequelize = new Sequelize('calculator', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports= {
    Sequelize: Sequelize,
    sequelize: sequelize
}