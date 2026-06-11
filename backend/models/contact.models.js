 import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    // 👤 User Info (from Contact Page)
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
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

    message: {
      type: String,
      required: true,
      trim: true,
    },

    // 📍 Optional (auto / admin)
    source: {
      type: String,
      enum: ["Contact Page", "Footer", "Landing Page", "Other"],
      default: "Contact Page",
    },

    status: {
      type: String,
      enum: ["new", "replied", "closed"],
      default: "new",
    },

    // 🔐 Security / Logs
    ipAddress: String,
    userAgent: String,
  },
  {
    timestamps: true,
  }
);

// 🔎 Indexes for admin panel search
contactSchema.index({ createdAt: -1 });
contactSchema.index({
  firstName: "text",
  lastName: "text",
  email: "text",
  phone: "text",
  message: "text",
});

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
