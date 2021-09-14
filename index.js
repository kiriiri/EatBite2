import express from 'express';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5055;

app.use(express.urlencoded({extended: true}));

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from homepage.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));