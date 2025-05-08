import { Schema, model } from 'mongoose';
import { genSalt, hash, compare } from 'bcryptjs';

const userSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  progress: {
    type: Map,
    of: Boolean, // e.g., { "p1": true, "p3": false }
    default: {}
  }
}, { timestamps: true });

//  Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// 🔐 Compare password method
userSchema.methods.comparePassword = function (candidatePassword) {
  return compare(candidatePassword, this.password);
};

export default model('User', userSchema);
