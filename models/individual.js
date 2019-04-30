const mongoose = require('mongoose');

const { Schema } = mongoose;

const individualSchema = new Schema({
    firstName: { type: String },
    secondFirstName: { type: String },
    lastName: { type: String, required: true },
    secondLastName: { type: String },
    gender: { type: String, required: true },
    dateOfBirth: { type : Date },
    placeOfBirth: { type: String },
    gotMarried: Boolean, 
    partner: [String],
    dateOfWedding: Date,
    placeOfWedding: { type: String },
    isDead: Boolean,
    placeOfDeath: { type: String },
    dateOfDeath: { type : Date },
    parents: [String, String],
    profession: { type: String },
    userId: {
      type: Schema.ObjectId,
      ref: 'User',
    },
    
  });
  
  const Individual = mongoose.model('Individual', individualSchema);
  
  module.exports = Individual;