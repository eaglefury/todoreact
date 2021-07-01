import * as mongo from 'mongoose';

const noteSchema = new mongo.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export const Note = mongo.model('Note', noteSchema);
