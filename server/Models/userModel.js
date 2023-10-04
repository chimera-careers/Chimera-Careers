import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    wpnum: { type: String, required: true },
    password: { type: String, minLength: 8, required: true },
    experience: { type: String },
    about: { type: String },
    location: { type: String },
    education: { type: String, required: true },
    role: { type: String, default: "jobseeker" },
  },
  { timestamps: true }
);

export const Employee =
  mongoose.model.users || mongoose.model("users", userSchema);
