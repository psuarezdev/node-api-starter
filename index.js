import express, { json, urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import users from './routes/users.js';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1/users', users);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
