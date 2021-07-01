import { Note } from './models/note';

export const addNote = async (noteData: any) => {
  const note = new Note({
    title: noteData.title,
    description: noteData.description,
    state: noteData.state,
  });

  await note.save();
};
