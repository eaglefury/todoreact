import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    min: 2,
    max: 20,
  },
  lastName: {
    type: String,
    min: 2,
    max: 20,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model('User', userSchema);
