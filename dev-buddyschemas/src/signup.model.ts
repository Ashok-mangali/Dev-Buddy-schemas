import { model as createModel, type Model } from "mongoose";
import type { SignupRecord } from "./signup.types.js";
import { SignupSchema } from "./signup.schema.js";

export type SignupModel = Model<SignupRecord>;

const schems = SignupSchema;
const model: SignupModel = createModel<SignupRecord>("Signup", schems);

export default model;

export const signupModel: SignupModel = model;


