const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
const { DataTypes } = require('sequelize');
const sequelize = require('db.js');

let Musician = sequelize.define('Musician', {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
});
module.exports = {
    Musician
};
