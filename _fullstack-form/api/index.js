const cors = require('cors');
const express = require('express');

const app = express();
const port = 666;

let transactionArray = [
    {
        transactionTitle: 'Lorem Ipsum',
        transactionDescription: 'Dolor Sit Amet',
    },
    {
        transactionTitle: 'consectetur adipiscing elit',
        transactionDescription: 'Pellentesque ac mi a mauris aliquet dictum',
    },
    {
        transactionTitle: 'Cras id justo eget arcu malesuada',
        transactionDescription: 'maximus Orci varius natoque penatibus et magnis',
    },
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
