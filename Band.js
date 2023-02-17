const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model
/* let Band; */

const { DataTypes } = require('sequelize');
const sequelize = require('db.js');

let Band = sequelize.define('Band', {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
});
module.exports = {
    Band
};