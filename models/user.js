const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
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
    
    mother: { type: Schema.ObjectId },
    father: { type: Schema.ObjectId },
    son: { type: Schema.ObjectId },
    daughter: { type: Schema.ObjectId },
    husband: { type: Schema.ObjectId },
    wife: { type: Schema.ObjectId },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;