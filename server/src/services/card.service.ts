import { NoteModel } from "../models/note.model";

export const addNote = async (noteData: any) => {
  const note = new NoteModel({
    title: noteData.title,
    description: noteData.description,
    state: noteData.state,
  });

  await note.save();
};
