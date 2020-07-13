var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser')
require('dotenv/config');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

//Import Routes
var postsRoutes = require("./routes/posts");

//Middleware
app.use('/posts',postsRoutes);  //1


//Connecting To Db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true,
  useUnifiedTopology: true },
()=>{console.log("connected")})

app.listen(5500,function(){
    console.log("API Started");
});

// 1 everytime we type posts in search bar call postsRouter