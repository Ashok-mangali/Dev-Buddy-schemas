import { Schema } from "mongoose";
// Mongoose schema for signup records
const SignupSchema = new Schema({
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
}, { timestamps: true });
// Backwards-compat exports (legacy names)
const SignInputSchemas = SignupSchema;
//export const signInputSchems = SignupSchema; 
export default SignInputSchemas;
//# sourceMappingURL=signup.schema.js.map