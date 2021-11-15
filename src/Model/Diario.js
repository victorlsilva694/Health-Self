const Sequelize  = require("sequelize");
const Connection = require("../Schema/connection");

const diario = Connection.define('diario', {
    title:{
        type: Sequelize.STRING(255),
        allowNull: true
    },
    body: {
        type: Sequelize.STRING(1000),
        allowNull: true,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

diario.sync({force: false}).then(() => {});
module.exports = diario;