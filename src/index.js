const express = require('express');

const app = express();

app.use(express.json());

app.get('/courses', (request, response) => {
    const query = request.query;

    console.log(query);

    return response.json([
        'Curso 1',
        'Curso 2',
        'Curso 3'
    ]);
});

app.post('/courses', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json([
        'Curso 1',
        'Curso 2',
        'Curso 3',
        'Curso 4'
    ]);
});

app.put('/courses/:id', (request, response) => {

    const { id } = request.params;

    console.log(id);

    return response.json([
        'Curso A',
        'Curso 2',
        'Curso 3',
        'Curso 4'
    ]);
});

app.delete('/courses/:id', (request, response) => {
    return response.json([
        'Curso A',
        'Curso 2',
        'Curso 3',
    ]);
});

app.listen(3333);