const mongoose = require('mongoose');

const { Schema } = mongoose;

const individualSchema = new Schema({
    firstName: { type: String },
    
    
  });
  
  const Individual = mongoose.model('Individual', individualSchema);
  
  module.exports = Individual;

  /*
  secondFirstName: String,
    lastName: { type: String, required: true },
    secondLastName: String,
    gender: { type: String, required: true },
    dateOfBirth: Date,
    placeOfBirth: String,
    gotMarried: Boolean, 
    partner: [String],
    dateOfWedding: Date,
    placeOfWedding: String,
    isDead: Boolean,
    placeOfDeath: String,
    dateOfDeath: Date,
    parents: [String, String],
    profession: String,
  */