import { DocumentDefinition, Mongoose } from "mongoose";
import { User, IUser } from "../models/user.model";

export const createUser = async (user: DocumentDefinition<IUser>) => {
  //TODO: validate the schema

  if (!getUserByEmail(user.email) === null) {
    throw new Error("User with email address already exists.");
  }

  return await User.create(user);
};

export const getUserByEmail = async (email: string) => {
  const userInDB = await User.findOne({ email: email }).exec();

  return userInDB;
};
