 import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },

  phone: {
    type: String,
    required: true,
    trim: true,
  },

  service: {
    type: String,
    trim: true,
  },

  date: {
    type: String,
  },

  message: {
    type: String,
    trim: true,
  },

},
{
  timestamps: true,
});

export default mongoose.model(
  "Appointment",
  appointmentSchema
);
