const cors = require('cors');
const express = require('express');

const app = express();
const port = 666;

let todoArray = [
    {
        todoTitle: 'Lorem Ipsum',
        todoDescription: 'Dolor Sit Amet',
    },
    {
        todoTitle: 'consectetur adipiscing elit',
        todoDescription: 'Pellentesque ac mi a mauris aliquet dictum',
    },
    {
        todoTitle: 'Cras id justo eget arcu malesuada',
        todoDescription: 'maximus Orci varius natoque penatibus et magnis',
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
app.get('/todos', (req, res) => {
    res.send(JSON.stringify(todoArray));
});

// POST - guardar cosas a backend
app.post('/todos', (req, res) => {
    let todos = req.body;
    todoArray.push(todos);
    res.send(JSON.stringify('Guardado'));
    console.log(todoArray);
});

app.listen(port, () => {
    console.log(`Ejecutandose en http://localhost:${port}`);
});
