import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';

const app = express();
const PORT = 5000;
dotenv.config();

// dataBase connection
connectDB()
// MIDDLEWARES
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// ROUTES


// LISTEN
app.get('/', (req, res) => {
    res.send('API WORKING')
});

app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`)
})