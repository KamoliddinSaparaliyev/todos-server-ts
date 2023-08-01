import mongoose, { Schema, Document, Model } from "mongoose";

interface UserAttributes {
  name: string;
  username: string;
  password: string;
}

interface UserDocument extends UserAttributes, Document {
  created_at: Date;
  updated_at: Date;
}

interface UserModel extends Model<UserDocument> {}

const userSchema: Schema<UserDocument, UserModel> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const User: Model<UserDocument> = mongoose.model<UserDocument, UserModel>(
  "User",
  userSchema
);

export { User, UserDocument };
