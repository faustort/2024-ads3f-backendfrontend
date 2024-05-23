const database = require('../database/db')

class Post {
    constructor() {
        this.model = database.db.define('post', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true
            },
            titulo: {
                type: database.db.Sequelize.STRING
            },
            conteudo: {
                type: database.db.Sequelize.STRING
            },
            autorId: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: 'user',
                    key: 'id'
                }
            }
        })
    }
}

module.exports = (new Post()).model