var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')

var app = express()

require('dotenv').config();

var port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

const uri = "mongodb+srv://youyouta:zwhDp4yGxgOlEdUo@cluster0-iglw6.gcp.mongodb.net/test1?retryWrites=true&w=majority"

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

