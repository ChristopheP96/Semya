const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, /*required: true*/ },
  username: String,
  password: { type: String, required: true },
  firstName: { type: String },
  secondFirstName: { type: String },
  lastName: { type: String, /*required: true*/ },
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
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;