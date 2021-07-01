import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 20,
  },
  lastName: {
    type: String,
    required: true,
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

export const User = mongoose.model<IUser>("User", userSchema);
