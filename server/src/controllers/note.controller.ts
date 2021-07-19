import { Request, Response } from "express";
import {
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
    res.status(200).send(await getNotes(req.params["userId"]));
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
};

export const addMultipleNotes = async (req: Request, res: Response) => {
  try {
    const response = await addNotes([req.body]);
    res.status(201).send(response);
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
};

export const deleteOneNote = async (req: Request, res: Response) => {
  try {
    res.status(204).send(await deleteNote(req.body));
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
};

export const updateOneNote = async (req: Request, res: Response) => {
  try {
    res.status(201).send(await updateNote(req.body));
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
};
