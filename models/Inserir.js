const db = require('./db')

const Inserir = db.sequelize.define('dados', {
    PrimeiroValor: {
        type: db.Sequelize.FLOAT
    },
    operador: {
        type: db.Sequelize.STRING
    },
    SegundoValor: {
        type: db.Sequelize.FLOAT
    },

    Resultado: {
        type: db.Sequelize.FLOAT
    },

    IP: {
        type: db.Sequelize.STRING
    }
})

//Criar a tabela
//Inserir.sync({force: true})

module.exports = Inserir
