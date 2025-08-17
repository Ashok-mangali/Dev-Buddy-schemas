import mongoose, { Schema, model } from "mongoose";
import type { SignupRecord } from "./signup.types.js";

// Mongoose schema for signup records
const SignupSchema = new Schema<SignupRecord>(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
      unique: true,
    },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const SignupModel = mongoose.model("SignupModel", SignupSchema);
export default SignupModel;
