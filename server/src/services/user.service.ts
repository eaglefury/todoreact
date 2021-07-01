import { DocumentDefinition, Mongoose } from "mongoose";
import { User, IUser } from "../models/user.model";

export const createUser = (user: DocumentDefinition<IUser>) => {
  //TODO: validate the schema
  const userInDB = User.findOne({ email: user.email });

  if (userInDB === null) {
    throw new Error("User with email address already exists.");
  }

  return User.create(user);
};
