 import mongoose from "mongoose";

const schema = new mongoose.Schema({

  name: String,
  email: String,
  phone: String,
  location: String,
  availability: String,
  experience: String,
  resume: String,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.model("Application", schema);
