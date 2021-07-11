import { INote, NoteModel } from "../models/note.model";
import { IUser } from "../models/user.model";

export const addNote = async ({ title, description, state, user }: INote) => {
  const note = new NoteModel({
    title,
    description,
    state,
    user,
  });

  return await note.save();
};

export const addNotes = async (notes: INote[]) => {
  notes.forEach(async ({ title, description, state, user }: INote) => {
    const note = new NoteModel({
      title,
      description,
      state,
      user,
    });
    await note.save();
  });
};

export const deleteNote = async (id: number) => {
  return await NoteModel.deleteOne({
    _id: id,
  });
};

export const getNotes = async ({ _id }: IUser) => {
  return await NoteModel.find({ user: _id });
};

export const updateNote = async ({ title, description, state, _id }: INote) => {
  return await NoteModel.updateOne(
    { _id },
    {
      title,
      description,
      state,
    }
  );
};
