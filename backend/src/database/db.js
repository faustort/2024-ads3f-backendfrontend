const { Sequelize } = require('sequelize')

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            database: 'segundaavaliacao',
            host: '127.0.0.1',
            username: 'root',
            password: '',
            dialect: 'mysql'
        })    
    }
}

module.exports = new Database()