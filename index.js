const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

//setting the localhost Port

const PORT = 5000 || process.env.PORT;

const DB = process.env.DB
    //linking the db
mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => { console.log('the database is connected') })
    .catch((err) => { console.log(`this is an error : ${err}`) })

app.use(express.json());
app.use(require('./routers'));
//setting the server to listen to requests

app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`the server is listening on ${PORT}`)
})