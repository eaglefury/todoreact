import { DocumentDefinition, Mongoose } from "mongoose";
import { User, IUser } from "../models/user.model";

export const createUser = async (user: DocumentDefinition<IUser>) => {
  //TODO: validate the schema
  const userInDB = await User.findOne({ email: user.email }).exec();

  if (userInDB !== null) {
    throw new Error("User with email address already exists.");
  }

  return await User.create(user);
};
