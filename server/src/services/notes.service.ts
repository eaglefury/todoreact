import { INote, NoteModel } from "../models/note.model";

export const addNote = async ({ title, description, state, user }: INote) => {
  const note = new NoteModel({
    title,
    description,
    state,
    user,
  });

  return await note.save();
};

export const addNotes = async (notes: INote[]): Promise<INote[]> => {
  const addedNotes: INote[] = [];
  for (const note of notes) {
    const newNote = new NoteModel({
      title: note.title,
      description: note.description,
      state: note.state,
      user: note.user,
    });
    const savedNote = await newNote.save();
    addedNotes.push(savedNote);
  }
  return addedNotes;
};

export const deleteNote = async ({ _id }: INote) => {
  return await NoteModel.deleteOne({
    _id,
  });
};

export const getNotes = async (_id: string) => {
  return await NoteModel.find({
    user: _id,
  });
};

export const updateNote = async ({ title, description, state, _id }: INote) => {
  return await NoteModel.updateOne(
    { _id },
    {
      _id,
      title,
      description,
      state,
    }
  );
};
