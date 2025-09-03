import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  email: { type: String, required: true },
  phone: { type: String, required: true, minlength: 10 },
  source: { type: String, required: true },
  notes: { type: String },
}, { timestamps: true });

export default mongoose.model("Lead", leadSchema);