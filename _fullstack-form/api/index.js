const cors = require('cors');
const express = require('express');

const app = express();
const port = 666;

let transactionArray = [
    { transactionDescription: 'Lorem Ipsum', transactionPrice: '1' },
    { transactionDescription: 'Dolor Sit Amet', transactionPrice: '2' },
];

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(
    express.json({
        type: '*/*',
    })
);

app.use(cors());

app.get('/', (req, res) => {
    res.send('si funciona');
});

// GET - regresar datos a frontend
app.get('/transactions', (req, res) => {
    res.send(JSON.stringify(transactionArray));
});

// POST - guardar cosas a backend
app.post('/transactions', (req, res) => {
    let transaction = req.body;
    transactionArray.push(transaction);
    res.send(JSON.stringify('Guardado'));
    console.log(transactionArray);
});

app.listen(port, () => {
    console.log(`Ejecutandose en http://localhost:${port}`);
});
