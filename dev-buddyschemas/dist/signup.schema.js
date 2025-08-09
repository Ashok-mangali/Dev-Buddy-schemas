import { Schema } from "mongoose";
// Mongoose schema for signup records
export const SignupSchema = new Schema({
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
export const SignInputSchemas = SignupSchema;
export const signInputSchems = SignupSchema;
//# sourceMappingURL=signup.schema.js.map