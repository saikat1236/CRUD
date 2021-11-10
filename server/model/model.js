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
    bfname:{
        type: String,
        required: true
    },
    bfaddrss:{
        type: String,
        required: true
    },
    gfname:{
        type: String,
        required: true
    },
    gfaddrss:{
        type: String,
        required: true
    },
})

const userdb = mongoose.model('userdb',scheme);
module.exports= userdb;