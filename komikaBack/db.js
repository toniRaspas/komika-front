const mysql = require('mysql');
const router = require('express').Router();

const connect = () => {
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE
    });
    global.db = pool;
}



console.log('hola mundo')

module.exports = {
    connect: connect
}