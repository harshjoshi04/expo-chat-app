import { model, Schema } from "mongoose";
import { CollectionName } from "../utils/CollectionName.js";

const UserSchema = new Schema(
  {
    userName: String,
    email: String,
    description: String,
    image: String,
    bannerImage: String,
    OTP: String,
  },
  { timestamps: true }
);

const UserModel = model(CollectionName.USER, UserSchema, CollectionName.USER);

export default UserModel;
