const express = require ('express');
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose');
const app = express();
const dotenv = require ('dotenv');
var socket = require('socket.io')

dotenv.config();


//connect to the database name "myproject" 
mongoose.connect('mongodb://localhost/myproject', { useNewUrlParser: true }, ()=>{
  console.log('connected to mongodb')
}); 
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);




app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });


app.use(express.static('public'));


//add bodyParser middleware to handle the data coming from the post request through req.body (must be before routes)
app.use(bodyParser.json());


//to get access to the api file for routes 
app.use('/api', require ('./routes/api'));      

var server = app.listen(process.env.port || 8080, ()=>{
    console.log("Hey, connected!")
}) 





//socket setup
var io = socket(server);

io.on('connection', function(socket){              //so any client will make a connection with the server, will have a unique socket 
  console.log("made socket connection")


  // Handle chat event
  socket.on('chat', function(data){                //server receives chat messages and emit it back to all clients connected in a socket
    io.sockets.emit('chat', data)
    console.log(data)
  })

   // Handle typing event
   socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
  });

})