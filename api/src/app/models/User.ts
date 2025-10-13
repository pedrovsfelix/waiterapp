import { model, Schema } from 'mongoose';

export const User = model("User", new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  type: {
    type: String,
    enum: ['ADMIN', 'WAITER'],
    default: 'WAITER'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}))
