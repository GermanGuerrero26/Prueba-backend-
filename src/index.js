const express = require('express')
const app = express()
const port = 5000

app.get('/', (request, response) => {
    response.send('Hola mundo!')
})

app.listen(port, () => {
    console.log('Escuchando en el puerto' + port)
})