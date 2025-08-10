import { model as createModel } from "mongoose";
import SignupSchema from "./signup.schema.js";
const schems = SignupSchema;
const model = createModel("Signup", schems);
export default model;
export const signupModel = model;
//# sourceMappingURL=signup.model.js.map