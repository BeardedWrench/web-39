require('dotenv').config();

const express = require('express');

const server = express();

server.use(express.json())

if( process.env.NODE_ENV !== 'production' ){ // on heroku, NODE_ENV has value of production
    const cors = require('cors');
    server.use(cors())
}
const PORT = process.env.PORT || 4000;

server.use( '*', ( req, res ) => {
    res.status(200).json({
        message: 'Api is running'
    })
})

server.listen( PORT, () => {
    console.log("Environment: ", process.env.NODE_ENV)
    console.log(`listening on port ${PORT}`)
})