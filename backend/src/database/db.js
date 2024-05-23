const { Sequelize } = require('sequelize')

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            database: 'segundaavaliacao',
            host: 'localhost',
            username: 'banco',
            password: 'feliz',
            dialect: 'mysql'
        })    
    }
}

module.exports = new Database()