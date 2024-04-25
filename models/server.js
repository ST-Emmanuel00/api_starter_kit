
require('dotenv').config()
const express = require('express')
const cors = require('cors')


class Server {

    constructor() {

        this.app = express()
        this.port = process.env.PORT
        this.userPath = '/api/users';

        this.middlewares()
        this.routes()

    }

    middlewares() {

        // 

        this.app.use(express.json());


        // Cors configuration

        this.app.use(cors(
            {
                "origin": "*",
                "methods": "GET,PUT,POST,DELETE",
            }

        ))

        // Public dir 

        this.app.use(express.static('public'))


    }
    routes() {

        this.app.use(this.userPath, require('../routes/user.routes'))

    }

    listen() {

        this.app.listen(this.port, () => {

            console.log(`Servidor Express escuchando en el puerto ${process.env.PORT}`);

        })
    };
}

module.exports = Server