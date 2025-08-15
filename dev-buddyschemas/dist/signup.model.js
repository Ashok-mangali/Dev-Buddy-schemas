import { model as createModel } from "mongoose";
import SignupSchema from "./signup.schema.js";
const schemas = SignupSchema;
const model = createModel("Signup", schemas);
export default model;
export const signupModel = model;
//# sourceMappingURL=signup.model.js.map