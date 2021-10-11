import express from 'express';

import cors from 'cors';

import usersRoutes from './routes/users.js';

import db from './database.js';

const app = express();
const PORT = process.env.PORT || 5055;

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(cors("*"));

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from homepage.'));

db.getConnection()
.then(conn => {
    conn.query("SELECT 1 as val")
    .then((rows) => {
        console.log(rows);//[{val: 1}, meta:...]
        //Table must have been created before
        //"CREATE TABLE myTable(id int, val varchar(255))"
        return conn.query("INSERT INTO myTable value (?,?)",[1,"mariadb"]);
    })
    .then((res) => {
        console.log(res);//{affectedRows: 1, insertId: 1, warningStatus:0}
        conn.end();
    })
    .catch(err => {
        //handle error
        console.log(err);
        conn.end();
    })
}).catch(err => {
    //not connected
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
