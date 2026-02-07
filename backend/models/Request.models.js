import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema({

  name: String,
  email: String,
  phone: String,
  location: String,

  status: {
    type: String,
    default: "Pending"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.model("NurseRequest", RequestSchema);
