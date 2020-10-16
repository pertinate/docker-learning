const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send(JSON.stringify({test: 'VALUE'}))
})

app.listen(3000, () => {
    console.log('Server Online')
})