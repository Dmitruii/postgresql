const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: '123',
    host: 'localhost',
    port: '5432',
    database: 'node_postgresql'
})

module.exports = pool

// console command
/*
\connect db_name - пере
psql \! chcp 1251 - Рус кодировка
\dt - показать тадлицы
*/