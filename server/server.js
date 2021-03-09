const express = require("express");
const session = require("express-session");
const flash =  require('connect-flash');
const app = express();
const path = require('path');
const port = 8000;

app
.use( express.json() )
.use( express.urlencoded({ extended: true }) )

.use(session({secret:'M11.n1.5am'}))
.use(flash())

.set('views',path.join(__dirname + '/views'))
.set('view engine', 'ejs')

.use(require('./routes/routes'))
.use(require('./routes/auth'))

.use(express.static(__dirname+"/client"))

.get("/",(req,res) =>    {res.json({message: "Hola ^^"});    });


const server = app.listen( port, () => console.log(`Server listening on port: ${port}`) );
const io = require('socket.io')(server);


// io.on("connection", function (socket) {
//    socket.on("mensuser", function (data) {
//      io.emit("repuser", { color: "green" });
//    });
//  });