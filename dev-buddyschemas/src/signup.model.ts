import type { Model } from "mongoose";
import type { SignupRecord } from "./signup.types.js";
import SignupModel from "./signup.schema.js";

export type SignupModel = Model<SignupRecord>;

export default SignupModel;

export const signupModel: SignupModel = SignupModel;


