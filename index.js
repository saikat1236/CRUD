const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path")
// var cons = require('consolidate');
const connectDB = require('./server/database/connection');
const app = express();

dotenv.config({path: "config.env"})
const port = process.env.PORT || 3000

//log req
app.use(morgan("tiny"));

//moongodb
connectDB();

//parse req
app.use(bodyparser.urlencoded({extended: true}))

// view engine setup
// app.engine('html', cons.swig)
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');
app.set('view engine', 'ejs');

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/output',express.static(path.resolve(__dirname,"views/output")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))

//routes
app.use('/',require('./server/routes/router'))

// app.listen(3000,()=>{console.log(`server is running on http://localhost:${PORT}`)});
app.listen(port,()=>{  // do not add localhost here if you are deploying it
    console.log("server listening to port "+port);
});