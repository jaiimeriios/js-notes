import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import chalk from 'chalk';

import usersRoutes from './src/routes/users.js';
import todosRoutes from './src/routes/todos.js';

const app = express();
const PORT = 666;
app.use(cors());
app.use(bodyParser.json());

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const mernTestDB = `mongodb+srv://${dbUser}:${dbPassword}@testdb.g6sqj.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
    .connect(mernTestDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(chalk.bgCyan(' Connected to MongoDB '));
    });

console.clear();

// HOME
app.get('/', (req, res) => {
    res.send(`
        <h1>Home Page - MongoDB API!</h1>
        <br>
        <a href="users">Users</a>
        <br><br>
        <a href="todos">Todos</a>
    `);
});

// ROUTES
app.use('/users', usersRoutes);
app.use('/todos', todosRoutes);

app.all('*', (req, res) => {
    res.send("You've tried reaching a route that doesn't exist.");
});

app.listen(PORT, () => {
    console.log(
        'Server running on port:',
        chalk.bgGreen(` http://localhost:${PORT} `)
    );
});