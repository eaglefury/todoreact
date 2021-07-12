import mongoose, { Schema, Document, Types } from "mongoose";
import { IUser } from "./user.model";

export interface INote extends Document {
  title: String;
  description: String;
  state: String;
  user: IUser["_id"];
}

const noteSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const NoteModel = mongoose.model<INote>("Note", noteSchema);
