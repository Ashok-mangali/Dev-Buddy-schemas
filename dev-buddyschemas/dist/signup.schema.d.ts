import { Schema } from "mongoose";
import type { SignupRecord } from "./signup.types.js";
declare const SignInputSchemas: Schema<SignupRecord, import("mongoose").Model<SignupRecord, any, any, any, import("mongoose").Document<unknown, any, SignupRecord, any, {}> & SignupRecord & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SignupRecord, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<SignupRecord>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<SignupRecord> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export default SignInputSchemas;
//# sourceMappingURL=signup.schema.d.ts.map