const mongoose = require('mongoose');

const { Schema } = mongoose;

const individualSchema = new Schema({
    firstName: { type: String },
    secondFirstName: { type: String },
    lastName: { type: String },
    secondLastName: { type: String },
    gender: { type: String },
    dateOfBirth: { type : Date },
    placeOfBirth: { type: String },
    dateOfWedding: Date,
    placeOfWedding: { type: String },
    isDead: Boolean,
    placeOfDeath: { type: String },
    dateOfDeath: { type : Date },
    profession: { type: String },
    individualIsUser: Boolean,
    
    mother: { type: Schema.ObjectId },
    father: { type: Schema.ObjectId },
    son: { type: Schema.ObjectId },
    daughter: { type: Schema.ObjectId },
    husband: { type: Schema.ObjectId },
    wife: { type: Schema.ObjectId },
        
    userId: {
      type: Schema.ObjectId,
      ref: 'User',
    },    
  });
  
  const Individual = mongoose.model('Individual', individualSchema);
  
  module.exports = Individual;