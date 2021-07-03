import { Request, Response } from 'express';

export const getNotes = (req: Request, res: Response) => {
  try {
    //   await addNote({
    //     title: "title",
    //     description: "description",
    //     state: "todo",
    //   });
  } catch (err) {
    console.log(err);
  }
  res.send('hello server! and test');
};
