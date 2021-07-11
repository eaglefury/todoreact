import { Request, Response } from "express";
import {
  addNote,
  addNotes,
  updateNote,
  deleteNote,
  getNotes,
} from "../services/notes.service";

/*TODO: 
Add validations
Add logger
*/

export const getUserNotes = async (req: Request, res: Response) => {
  try {
    res.status(201).send(await getNotes(req.body));
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
  res.send("hello server! and test");
};

export const addOneNote = async (req: Request, res: Response) => {
  try {
    res.status(201).send(await addNote(req.body));
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
  res.send("hello server! and test");
};

export const addMultipleNotes = async (req: Request, res: Response) => {
  try {
    res.status(201).send(await addNotes(req.body));
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
  res.send("hello server! and test");
};

export const deleteOneNote = async (req: Request, res: Response) => {
  try {
    res.status(201).send(await deleteNote(req.body));
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
  res.send("hello server! and test");
};

export const updateOneNote = async (req: Request, res: Response) => {
  try {
    res.status(201).send(await updateNote(req.body));
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
};
