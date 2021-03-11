require('dotenv').config();

const path = require('path');

const express = require('express');

const server = express();

server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))

if( process.env.NODE_ENV !== 'production' ){ // on heroku, NODE_ENV has value of production
    const cors = require('cors');
    server.use(cors())
}
const PORT = process.env.PORT || 4000;

server.get('/api/hello', ( req, res ) => {
    res.json({
        message: 'hello all of you'
    })
})
server.get( '*', ( req, res ) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.listen( PORT, () => {
    console.log("Environment: ", process.env.NODE_ENV)
    console.log(`listening on port ${PORT}`)
})