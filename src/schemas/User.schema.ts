import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UserSettings } from "./UserSettings.schema";
import mongoose from "mongoose";

@Schema()
export class User {
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    type: String,
    required: true,
  })
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "UserSettings" })
  settings?: UserSettings;
}

export const UserSchema = SchemaFactory.createForClass(User);
