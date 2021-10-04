import express from 'express';

import cors from 'cors';

import usersRoutes from './routes/users.js';

//const { express } = require('pg');

import Client from 'pg';

const app = express();
const PORT = process.env.PORT || 5055;

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(cors("*"));

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from homepage.'));

const db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'EatBite',
    password: 'Kiri2018',
    port: 5432,
  })
  db.connect()
  db.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  })

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
