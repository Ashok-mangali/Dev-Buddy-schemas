import mongoose from "mongoose";
import type { SignupRecord } from "./signup.types.js";
declare const SignupModel: mongoose.Model<SignupRecord, {}, {}, {}, mongoose.Document<unknown, {}, SignupRecord, {}, {}> & SignupRecord & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any, any>;
export default SignupModel;
//# sourceMappingURL=signup.schema.d.ts.map