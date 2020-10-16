const express = require('express');

const port = process.env.PORT || 8080;

const app = express();

app.get('/', (request, response) => {
    response.send(JSON.stringify({test: 'updated value'}))
})

app.get('/docker', (request, response) => {
    response.send(JSON.stringify({test: 'DOCKER'}))
})

app.listen(8080, () => {
    console.log('Server Online on port:', port)
});