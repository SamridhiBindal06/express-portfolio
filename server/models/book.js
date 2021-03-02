/*

    File name: book.js
    Created By: Samridhi Bindal
    Student ID: 301172178
    Created on: 02 March, 2021

*/

let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);