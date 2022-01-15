// const mongoose = require('mongoose');

// var scheme = new mongoose.Schema({
//     name:{
//         type: String,
//         required: true
//     },
//     email:{
//         type: String,
//         unique: true,
//         required: true
//     },
//     gender: String,
//     status: String
// })

// const userdb = mongoose.model('userdb',scheme);
// module.exports= userdb;

const mongoose = require('mongoose');

var scheme = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirmpass:{
        type: String,
        required: true
    },
})

const userdb = mongoose.model('userdb',scheme);
module.exports= userdb;