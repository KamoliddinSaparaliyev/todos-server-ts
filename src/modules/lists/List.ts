import mongoose, { Schema, Document, Model } from "mongoose";

interface ListAttributes extends Document {
  name: string;
  user: mongoose.Schema.Types.ObjectId;
  todos: mongoose.Schema.Types.ObjectId[];
  created_at: Date;
  updated_at: Date;
  is_deleted: boolean;
}

const listSchema: Schema<ListAttributes> = new Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    todos: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "Todo",
      default: [],
    },
  },
  {
    versionKey: false,
  }
);

const List = mongoose.model<ListAttributes>("List", listSchema);

export { List, ListAttributes };
