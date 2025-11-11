 // controllers/contact.controllers.js
import { sendMail } from "../utils/sendMail.js";
import ContactLead from "../models/contact.models.js";

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ✅ CREATE INQUIRY (Admin + User mail)
export const createInquiry = async (req, res) => {
  const {
    parentName,
    email,
    phone,
    childName,
    childAge,
    city,
    state,
    zipCode,
    message,
    serviceInterest,
    preferredContact,
    bestTimeToReach,
    leadSource,
    utm,
  } = req.body;

  if (!parentName || !email || !phone || !message)
    return res.status(400).json({
      ok: false,
      message: "Parent name, email, phone, and message are required.",
    });

  try {
    const saved = {
      parentName: parentName?.trim() || "",
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      childName: childName || "N/A",
      childAge: childAge || "N/A",
      city: city || "",
      state: state || "",
      zipCode: zipCode || "",
      message: message || "",
      serviceInterest: serviceInterest || "",
      preferredContact: preferredContact || "",
      bestTimeToReach: bestTimeToReach || "",
      leadSource: leadSource || "Website",
      ipAddress: req.ip || req.headers["x-forwarded-for"] || "N/A",
      userAgent: req.get("User-Agent") || "N/A",
      createdAt: new Date(),
    };

    // ✅ ADMIN MAIL
    const adminHtml = `
      <h2 style="color:#ff7a00;">New Inquiry - Autism ABA Partners</h2>
      <p><strong>Parent/Guardian:</strong> ${escapeHtml(saved.parentName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(saved.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(saved.phone)}</p>
      <p><strong>Child:</strong> ${escapeHtml(saved.childName)} (Age: ${escapeHtml(
      saved.childAge
    )})</p>
      <p><strong>Service Interest:</strong> ${escapeHtml(saved.serviceInterest)}</p>
      <p><strong>Preferred Contact:</strong> ${escapeHtml(saved.preferredContact)}</p>
      <p><strong>Best Time:</strong> ${escapeHtml(saved.bestTimeToReach)}</p>
      <p><strong>City:</strong> ${escapeHtml(saved.city)}, ${escapeHtml(
      saved.state
    )} ${escapeHtml(saved.zipCode)}</p>
      <p><strong>Message:</strong><br>${escapeHtml(saved.message)}</p>
      <hr />
      <small>Source: ${escapeHtml(saved.leadSource)}<br>IP: ${escapeHtml(
      saved.ipAddress
    )}<br>User Agent: ${escapeHtml(saved.userAgent)}</small>
    `;

    // ✅ USER MAIL
    const userHtml = `
      <div style="font-family: Arial; color: #333;">
        <h2 style="color:#ff7a00;">Thank You for Contacting Autism ABA Partners</h2>
        <p>Hi ${escapeHtml(saved.parentName)},</p>
        <p>We’ve received your message and our team will contact you within 24 hours.</p>
        <div style="background:#f8f9fa; padding:10px; border-radius:8px; margin-top:8px;">
          <strong>Summary:</strong><br>
          Service Interest: ${escapeHtml(saved.serviceInterest)}<br>
          Message: ${escapeHtml(saved.message)}
        </div>
        <p>Warm regards,<br>Autism ABA Partners Team</p>
      </div>
    `;

    // ✅ Send both mails
    await Promise.all([
      sendMail({
        to: process.env.ADMIN_EMAIL,
        subject: `📩 New Inquiry - ${saved.parentName}`,
        html: adminHtml,
        text: `New inquiry from ${saved.parentName} (${saved.email})`,
      }),
      sendMail({
        to: saved.email,
        subject: "✅ Thank You for Contacting Autism ABA Partners",
        html: userHtml,
        text: `Hello ${saved.parentName}, we have received your inquiry.`,
      }),
    ]);

    res.status(201).json({
      ok: true,
      message: "Inquiry emails sent successfully!",
      contact: saved,
    });
  } catch (error) {
    console.error("❌ Inquiry error:", error);
    res.status(500).json({
      ok: false,
      message: "Failed to send inquiry emails",
      error: error.message,
    });
  }
};

// ✅ STUBS TO AVOID IMPORT ERRORS
export const getAllInquiry = async (req, res) =>
  res.status(200).json({ ok: true, message: "Database disabled — inquiries not stored." });

export const deleteInquiry = async (req, res) =>
  res.status(200).json({ ok: true, message: "Database disabled — nothing to delete." });

export const getInquiryById = async (req, res) =>
  res.status(200).json({ ok: true, message: "Database disabled — no records available." });
