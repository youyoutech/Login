var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')

var app = express()

require('dotenv').config();

var port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

const uri = "mongodb://127.0.0.1:27017/loginTest"


mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})


var usersRooter = require('./routes/Users')
app.use('/users', usersRooter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});

