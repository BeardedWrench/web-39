require('dotenv').config();

const express = require('express');

const server = express();

server.use(express.json())
console.log(process.env.NODE_ENV);
if( process.env.NODE_ENV !== 'production' ){ // on heroku, NODE_ENV has value of production
    const cors = require('cors');
    server.use(cors())
}