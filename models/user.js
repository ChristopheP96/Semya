const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String },
  gender: { type: String },
  dateOfBirth: { type : Date },
  isDead: Boolean,
  mother: { type: Schema.ObjectId },
  father: { type: Schema.ObjectId },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;