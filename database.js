import mariadb from 'mariadb';
const pool = mariadb.createPool({
    host:'localhost',
    user:'root',
    password:'Kiri2018',
    database:'EatBite',
    connectionLimit:5,
    port:3306
});

export default pool;