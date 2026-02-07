  import Contact from "../models/contact.models.js";
import { sendMail } from "../utils/sendMail.js";

/* ---------------- HTML Escape ---------------- */
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

  /* ================= ADMIN EMAIL ================= */

const adminHtml = (c) => `
<div style="font-family:Arial,sans-serif;padding:20px;">

  <h2 style="color:#2563eb;">
    📩 New Contact Enquiry Received
  </h2>

  <hr/>

  <table style="width:100%;font-size:14px;line-height:1.8;">

    <tr>
      <td><b>Name:</b></td>
      <td>${escapeHtml(c.firstName)} ${escapeHtml(c.lastName)}</td>
    </tr>

    <tr>
      <td><b>Email:</b></td>
      <td>${escapeHtml(c.email)}</td>
    </tr>

    <tr>
      <td><b>Phone:</b></td>
      <td>${escapeHtml(c.phone)}</td>
    </tr>

  </table>

  <br/>

  <p><b>Message:</b></p>

  <div style="
    background:#f9fafb;
    padding:12px;
    border-left:4px solid #2563eb;
    font-size:14px;
  ">
    ${escapeHtml(c.message)}
  </div>

  <hr/>

  <p style="font-size:13px;color:#444;line-height:1.6;">

    <b>About Zenithcare</b><br/>

    Zenithcare provides professional nursing and therapy services
    focused on comfort, safety, and patient well-being.
    Our certified team delivers reliable care at home and in hospitals
    with dignity and respect.

  </p>

  <p style="font-size:12px;color:#555;">

    <b>Technical Info</b><br/>

    IP Address: ${escapeHtml(c.ipAddress || "Unknown")}<br/>
    Browser: ${escapeHtml(c.userAgent || "Unknown")}

  </p>

</div>
`;


/* ================= USER EMAIL ================= */

const userHtml = (c) => `
<div style="font-family:Arial,sans-serif;padding:20px;">

  <h2 style="color:#16a34a;">
    ✅ We’ve Received Your Message
  </h2>

  <p>Hello <b>${escapeHtml(c.firstName)}</b>,</p>

  <p>
    Thank you for contacting <b>Zenithcare</b>.
  </p>

  <p>
    We appreciate your interest in our healthcare services.
    Our support team will review your message and respond shortly.
  </p>

  <hr/>

  <p><b>Your Message:</b></p>

  <div style="
    background:#f9fafb;
    padding:12px;
    border-left:4px solid #16a34a;
    font-size:14px;
  ">
    ${escapeHtml(c.message)}
  </div>

  <hr/>

  <p style="font-size:13px;color:#444;line-height:1.6;">

    <b>About Zenithcare</b><br/>

    Zenithcare provides professional nursing and therapy services
    focused on comfort, safety, and patient well-being.
    Our certified team delivers reliable care at home and in hospitals
    with dignity and respect.

  </p>

  <p style="margin-top:20px;">

    Warm regards,<br/>

    <b>Zenithcare Care Team</b><br/>
    

  </p>

</div>
`;


/* ------------------------------------------------ */
/* CREATE CONTACT (PUBLIC)                          */
/* ------------------------------------------------ */
export const createContact = (req, res) => {
  // ✅ instant response (UX friendly)
  res.status(202).json({
    ok: true,
    message: "Message received. We will contact you shortly.",
  });

  // ✅ background processing
  setImmediate(async () => {
    try {
      const { firstName, lastName, email, phone, message } = req.body;

      // ✅ model-level required fields validation
      if (!firstName || !lastName || !email || !phone || !message) {
        console.warn("⚠️ Contact skipped: missing required fields");
        return;
      }

      const contact = await Contact.create({
        firstName,
        lastName,
        email,
        phone,
        message,
        source: "Contact Page",
        status: "new", // ✅ matches model enum
        ipAddress: req.ip,
        userAgent: req.headers["user-agent"],
      });

      // ✅ notify admin
      await sendMail({
        to: process.env.ADMIN_EMAIL,
        subject: "New Contact Message",
        html: adminHtml(contact),
        replyTo: contact.email,
      });

      // ✅ confirmation to user
      await sendMail({
        to: contact.email,
        subject: "We received your message",
        html: userHtml(contact),
      });

    } catch (err) {
      console.error("❌ Background contact error:", err);
    }
  });
};

/* ------------------------------------------------ */
/* GET ALL CONTACTS (ADMIN)                         */
/* ------------------------------------------------ */
export const getAllContacts = async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ ok: true, contacts });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* GET CONTACT BY ID (ADMIN)                        */
/* ------------------------------------------------ */
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }
    res.json({ ok: true, contact });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* UPDATE CONTACT STATUS (ADMIN)                    */
/* ------------------------------------------------ */
export const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;

    // ✅ matches model enum exactly
    const allowedStatus = ["new", "replied", "closed"];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        ok: false,
        message: "Invalid status value",
      });
    }

    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }

    res.json({ ok: true, contact: updated });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* DELETE CONTACT (ADMIN)                           */
/* ------------------------------------------------ */
export const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }
    res.json({ ok: true, message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};
