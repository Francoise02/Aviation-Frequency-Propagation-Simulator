// Improting mongoose package
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Creating a schema for the coordinates
const recieverSchema = new Schema({
  longitute: {
    type: Number,
    required: [true, 'Please! enter longitute.']
  },
  latitude: {
    type: Number,
    required: [true, 'Please! enter latitute.']
  },
  radius: {
    type: Number,
    min:4,
    max:10,
    required: [true, 'Please! enter radius between 4 to 10 km']
  }
});

// Exporting the module
const Reciever = model('Reciever', recieverSchema);
module.exports= Reciever;

