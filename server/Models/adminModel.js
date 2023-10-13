import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, minLength: 8, required: true }
  },
  { timestamps: true }
);

export const Admin =
  mongoose.model.admins || mongoose.model("admins", adminSchema);
