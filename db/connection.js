const { Sequelize} = require('sequelize');

const connect = new Sequelize('', 'postgres', '0000', {host: 'localhost', dialect: 'postgres'});