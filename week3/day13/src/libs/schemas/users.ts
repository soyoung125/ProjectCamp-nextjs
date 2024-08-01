import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    authProviderId: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
