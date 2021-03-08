const express = require("express");
const app = express();
const path = require('path');
const port = 8000;

app
.use( express.json() )
.use( express.urlencoded({ extended: true }) )

.set('views',path.join(__dirname + '/views'))
.set('view engine', 'ejs')

.use(require('./routes/routes'))
.use(require('./routes/auth'))

.use(express.static(__dirname+"/public"))

.get("/",(req,res) =>    {res.json({message: "Hola ^^"});    });


const server = app.listen( port, () => console.log(`Server listening on port: ${port}`) );
const io = require('socket.io')(server);