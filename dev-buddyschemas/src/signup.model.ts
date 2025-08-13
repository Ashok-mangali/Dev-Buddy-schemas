import { model as createModel, type Model } from "mongoose";
import type { SignupRecord } from "./signup.types.js";
import SignupSchema from "./signup.schema.js";

export type SignupModel = Model<SignupRecord>;

const schemas = SignupSchema;
const model: SignupModel = createModel<SignupRecord>("Signup", schemas);

export default model;

export const signupModel: SignupModel = model;


