/*

    File name: contact.js
    Created By: Samridhi Bindal
    Student ID: 301172178
    Created on: 02 March, 2021

*/

let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);