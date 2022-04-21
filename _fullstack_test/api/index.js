import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './users.js';

const app = express();
const PORT = 666;

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('<h1>Home Page - Users API!</h1>')
    // console.log('[TEST]')
    // console.log(req)
});

app.use('/users', usersRoutes);

app.all('*', (req, res) => {
    res.send("You've tried reaching a route that doesn't exist.")
});

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
});