 import Contact from "../models/contact.models.js";
import { sendMail } from "../utils/sendMail.js";

/* ------------------------------------------------ */
/* Helper: escape HTML (email safety)               */
/* ------------------------------------------------ */
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ------------------------------------------------ */
/* CREATE CONTACT (Public)                          */
/* ------------------------------------------------ */
export const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body || {};

    /* ---------- VALIDATION ---------- */
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({
        ok: false,
        message: "All fields are required.",
      });
    }

    if (message.length > 2000) {
      return res.status(400).json({
        ok: false,
        message: "Message is too long.",
      });
    }

    /* ---------- SAVE TO DB ---------- */
    const contact = await Contact.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message.trim(),
      source: "Contact Page",
      ipAddress:
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.socket?.remoteAddress ||
        "N/A",
      userAgent: req.get("User-Agent") || "N/A",
    });

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

    /* ===================================================== */
    /* ADMIN EMAIL TEMPLATE (Blue / White – Professional)    */
    /* ===================================================== */
    const adminHtml = `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F9FF;padding:30px;font-family:Arial,sans-serif;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;">
        
        <tr>
          <td style="background:#1E63D9;color:#ffffff;padding:20px 30px;">
            <h2 style="margin:0;">Decoder Health</h2>
            <p style="margin:5px 0 0;font-size:14px;">New Contact Inquiry</p>
          </td>
        </tr>

        <tr>
          <td style="padding:30px;color:#333;">
            <h3 style="color:#1E63D9;margin-top:0;">📩 New Message Received</h3>

            <table width="100%" cellpadding="8" cellspacing="0" style="font-size:14px;">
              <tr>
                <td width="35%"><strong>Name</strong></td>
                <td>${escapeHtml(contact.firstName)} ${escapeHtml(contact.lastName)}</td>
              </tr>
              <tr>
                <td><strong>Email</strong></td>
                <td>${escapeHtml(contact.email)}</td>
              </tr>
              <tr>
                <td><strong>Phone</strong></td>
                <td>${escapeHtml(contact.phone)}</td>
              </tr>
              <tr>
                <td valign="top"><strong>Message</strong></td>
                <td>${escapeHtml(contact.message)}</td>
              </tr>
            </table>

            <hr style="margin:25px 0;border:none;border-top:1px solid #E5EAF5;" />

            <p style="font-size:12px;color:#777;">
              Source: ${escapeHtml(contact.source)}<br/>
              IP: ${escapeHtml(contact.ipAddress)}<br/>
              User Agent: ${escapeHtml(contact.userAgent)}
            </p>
          </td>
        </tr>

        <tr>
          <td style="background:#F0F4FF;padding:15px;text-align:center;font-size:12px;color:#555;">
            Decoder Health • Autism Therapy & Support
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;

    /* ===================================================== */
    /* USER CONFIRMATION EMAIL (Warm + Reassuring)           */
    /* ===================================================== */
    const userHtml = `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F9FF;padding:30px;font-family:Arial,sans-serif;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;">

        <tr>
          <td style="background:#1E63D9;color:#ffffff;padding:25px 30px;">
            <h2 style="margin:0;">Decoder Health</h2>
            <p style="margin:6px 0 0;font-size:14px;">Autism Therapy & Family Support</p>
          </td>
        </tr>

        <tr>
          <td style="padding:30px;color:#333;">
            <h3 style="color:#1E63D9;margin-top:0;">Thank You for Reaching Out</h3>

            <p>Hello ${escapeHtml(contact.firstName)},</p>

            <p style="line-height:1.6;">
              Thank you for contacting <strong>Decoder Health</strong>.
              We have received your message, and a member of our care team
              will connect with you shortly.
            </p>

            <div style="background:#F5F9FF;border-left:4px solid #1E63D9;padding:15px;margin:20px 0;">
              <strong>Your Message:</strong><br/>
              ${escapeHtml(contact.message)}
            </div>

            <p style="line-height:1.6;">
              We are committed to providing compassionate, evidence-based
              autism therapy and supporting families at every step.
            </p>

            <p style="margin-top:25px;">
              Warm regards,<br/>
              <strong>Decoder Health Team</strong>
            </p>
          </td>
        </tr>

        <tr>
          <td style="background:#F0F4FF;padding:15px;text-align:center;font-size:12px;color:#555;">
            © ${new Date().getFullYear()} Decoder Health • Empowering Every Ability
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;

    /* ---------- SEND EMAILS ---------- */
    try {
      await Promise.all([
        sendMail({
          to: ADMIN_EMAIL,
          subject: "📩 New Contact Message – Decoder Health",
          html: adminHtml,
          replyTo: contact.email,
        }),
        sendMail({
          to: contact.email,
          subject: "We’ve received your message – Decoder Health",
          html: userHtml,
        }),
      ]);
    } catch (mailErr) {
      console.error("Mail error:", mailErr.message);
    }

    return res.status(201).json({
      ok: true,
      message: "Message submitted successfully.",
      contactId: contact._id,
    });
  } catch (error) {
    console.error("Create Contact Error:", error);
    return res.status(500).json({
      ok: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

/* ------------------------------------------------ */
/* GET ALL CONTACTS (Admin)                         */
/* ------------------------------------------------ */
export const getAllContacts = async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
    return res.json({ ok: true, contacts });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* GET CONTACT BY ID (Admin)                        */
/* ------------------------------------------------ */
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).lean();
    if (!contact) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }
    return res.json({ ok: true, contact });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* UPDATE CONTACT STATUS (Admin)                    */
/* ------------------------------------------------ */
export const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).lean();

    if (!updated) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }

    return res.json({ ok: true, contact: updated });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* DELETE CONTACT (Admin)                           */
/* ------------------------------------------------ */
export const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }
    return res.json({ ok: true, message: "Contact deleted successfully" });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
};
