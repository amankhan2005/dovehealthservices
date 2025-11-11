 // controllers/contact.controller.js
import nodemailer from "nodemailer";
import ContactLead from "../models/contact.models.js"; // optional, you had it already
import process from "process";

let sendgrid;
try {
  // optional dependency
  // eslint-disable-next-line import/no-unresolved
  sendgrid = (await import("@sendgrid/mail")).default;
} catch (e) {
  // not installed or not using sendgrid, that's fine
  sendgrid = null;
}

// Utility
function missingFields(body, fields) {
  return fields.filter((f) => body[f] === undefined || body[f] === null || body[f] === "");
}
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// --- Transporter factories ---
function createGmailTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_PASSWORD, // App password recommended
    },
    tls: { rejectUnauthorized: false },
  });
}

function createGenericSmtpTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: (process.env.SMTP_SECURE === "true") || false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// choose transporter or provider based on env
async function getMailer() {
  const mode = (process.env.MAIL_MODE || "GMAIL").toUpperCase(); // GMAIL | SMTP | SENDGRID
  if (mode === "SENDGRID") {
    if (!sendgrid) throw new Error("SendGrid mode selected but @sendgrid/mail not installed");
    if (!process.env.SENDGRID_API_KEY) throw new Error("SENDGRID_API_KEY missing");
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    return { mode: "SENDGRID", client: sendgrid };
  }
  if (mode === "SMTP") {
    const transporter = createGenericSmtpTransporter();
    return { mode: "SMTP", client: transporter };
  }
  // default to Gmail SMTP
  const transporter = createGmailTransporter();
  return { mode: "GMAIL", client: transporter };
}

// --------------------------- MAIN HANDLER ---------------------------
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
  } = req.body || {};

  const required = ["parentName", "email", "phone", "message"];
  const missing = missingFields(req.body || {}, required);
  if (missing.length > 0) {
    return res.status(400).json({
      ok: false,
      message: `Missing required fields: ${missing.join(", ")}`,
    });
  }

  try {
    const saved = {
      parentName: parentName?.trim() || "",
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      childName: childName?.trim() || "",
      childAge:
        childAge !== undefined && childAge !== "" ? Number(childAge) : undefined,
      city: city?.trim() || "",
      state: state?.trim() || "",
      zipCode: zipCode?.trim() || "",
      message: String(message).trim(),
      serviceInterest: serviceInterest || "",
      preferredContact: preferredContact || "",
      bestTimeToReach: bestTimeToReach || "",
      leadSource: leadSource || "",
      utm: typeof utm === "object" ? utm : undefined,
      ipAddress: req.ip || req.headers["x-forwarded-for"] || "",
      userAgent: req.get("User-Agent") || "",
      createdAt: new Date(),
    };

    // --- Prepare email content (same as you had) ---
    const adminSubject = `New Inquiry — ${saved.parentName}`;
    const adminText = `
Autism ABA Partners — New Inquiry

Parent/Guardian: ${saved.parentName}
Email: ${saved.email}
Phone: ${saved.phone}

Child: ${saved.childName || "N/A"} (Age: ${
      typeof saved.childAge !== "undefined" ? saved.childAge : "N/A"
    })
Service Interest: ${saved.serviceInterest || "N/A"}
Preferred Contact: ${saved.preferredContact || "N/A"}
Best Time: ${saved.bestTimeToReach || "N/A"}

Location: ${
      [saved.city, saved.state, saved.zipCode].filter(Boolean).join(", ") ||
      "N/A"
    }

Message:
${saved.message}

Source: ${saved.leadSource || "N/A"}
IP: ${saved.ipAddress || "N/A"}
User Agent: ${saved.userAgent || "N/A"}

-- Autism ABA Partners Website
`.trim();

    const adminHtml = `
<html>
  <body style="font-family: Arial, sans-serif; background:#ffffff; color:#1e293b; margin:0; padding:20px;">
    <h2 style="color:#ff7a00; margin-bottom:8px;">Autism ABA Partners — New Inquiry</h2>
    <p style="margin:4px 0;"><strong>Parent/Guardian:</strong> ${escapeHtml(
      saved.parentName
    )}</p>
    <p style="margin:4px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(
      saved.email
    )}" style="color:#0f5132;">${escapeHtml(saved.email)}</a></p>
    <p style="margin:4px 0;"><strong>Phone:</strong> ${escapeHtml(saved.phone)}</p>
    <p style="margin:4px 0;"><strong>Child:</strong> ${escapeHtml(
      saved.childName || "N/A"
    )} (Age: ${
      typeof saved.childAge !== "undefined"
        ? escapeHtml(String(saved.childAge))
        : "N/A"
    })</p>
    <p style="margin:4px 0;"><strong>Service Interest:</strong> ${escapeHtml(
      saved.serviceInterest || "N/A"
    )}</p>
    <p style="margin:4px 0;"><strong>Preferred Contact:</strong> ${escapeHtml(
      saved.preferredContact || "N/A"
    )}</p>
    <p style="margin:4px 0;"><strong>Best Time:</strong> ${escapeHtml(
      saved.bestTimeToReach || "N/A"
    )}</p>
    <p style="margin:4px 0;"><strong>Location:</strong> ${escapeHtml(
      [saved.city, saved.state, saved.zipCode].filter(Boolean).join(", ") ||
        "N/A"
    )}</p>
    <p style="margin-top:10px;"><strong>Message:</strong><br><span style="white-space:pre-wrap;">${escapeHtml(
      saved.message
    )}</span></p>
    <hr style="margin:20px 0; border:none; border-top:1px solid #e2e8f0;">
    <p style="font-size:13px; color:#64748b;">
      Source: ${escapeHtml(saved.leadSource || "N/A")}<br>
      IP: ${escapeHtml(saved.ipAddress || "N/A")}<br>
      UA: ${escapeHtml(saved.userAgent || "N/A")}
    </p>
    <p style="margin-top:20px; font-size:12px; color:#64748b;">Autism ABA Partners • info@autismabapartners.com</p>
  </body>
</html>
`.trim();

    const userSubject = `Thank You — Autism ABA Partners`;
    const userText = `
Hello ${saved.parentName},

Thank you for reaching out to Autism ABA Partners!
We’ve received your message and our team will contact you within 24 hours.

Summary:
Service Interest: ${saved.serviceInterest || "N/A"}
Message: ${saved.message}

If this is urgent, you can reply directly to this email.

— Autism ABA Partners
info@autismabapartners.com
`.trim();

    const userHtml = `
<html>
  <body style="font-family: Arial, sans-serif; background:#fafaf9; color:#1e293b; margin:0; padding:24px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; box-shadow:0 6px 18px rgba(0,0,0,0.06); overflow:hidden;">
      <div style="padding:16px 20px; background:#ff7a00;">
        <h2 style="margin:0; color:#ffffff;">Thank You for Contacting Us</h2>
      </div>
      <div style="padding:20px;">
        <p>Hi ${escapeHtml(saved.parentName)},</p>
        <p>Thank you for reaching out to <strong>Autism ABA Partners</strong>. We’ve received your message and will contact you within 24 hours.</p>

        <div style="margin:16px 0; padding:12px; background:#f8faf8; border-radius:6px; border:1px solid #e2e8f0;">
          <strong>Summary</strong><br>
          <span>Service Interest: ${escapeHtml(saved.serviceInterest || "N/A")}</span><br>
          <span>Message:</span>
          <div style="margin-top:6px; white-space:pre-wrap;">${escapeHtml(
            saved.message
          )}</div>
        </div>

        <p>If your matter is urgent, reply to this email directly.</p>
        <p style="margin-top:16px; color:#64748b; font-size:14px;">Warm regards,<br>Autism ABA Partners</p>
      </div>
      <div style="padding:14px 20px; background:#f9fafb; text-align:center; font-size:13px; color:#64748b;">
        info@autismabapartners.com
      </div>
    </div>
  </body>
</html>
`.trim();

    // --- Get mailer ---
    let mailer;
    try {
      mailer = await getMailer();
    } catch (err) {
      console.error("Mailer init error:", err);
      return res.status(500).json({
        ok: false,
        message: "Mailer initialization failed. Check MAIL_MODE and env vars.",
        error: err?.message || err,
      });
    }

    // --- SEND using chosen mode ---
    if (mailer.mode === "SENDGRID") {
      // using @sendgrid/mail
      try {
        const adminMsg = {
          to: process.env.ADMIN_EMAIL,
          from: process.env.FROM_EMAIL || process.env.ADMIN_EMAIL,
          subject: adminSubject,
          text: adminText,
          html: adminHtml,
        };
        const userMsg = {
          to: saved.email,
          from: process.env.FROM_EMAIL || process.env.ADMIN_EMAIL,
          subject: userSubject,
          text: userText,
          html: userHtml,
        };

        const [adminRes, userRes] = await Promise.all([
          mailer.client.send(adminMsg),
          mailer.client.send(userMsg),
        ]);
        console.log("SendGrid adminRes:", adminRes?.[0]?.statusCode || adminRes);
        console.log("SendGrid userRes:", userRes?.[0]?.statusCode || userRes);
      } catch (err) {
        console.error("SendGrid send error:", err);
        return res.status(500).json({
          ok: false,
          message: "Failed to send emails via SendGrid. Check SENDGRID_API_KEY and sender verification.",
          error: err?.message || err,
        });
      }
    } else {
      // SMTP (GMAIL or generic)
      const transporter = mailer.client;
      try {
        await transporter.verify();
        console.log("Transporter verified (mode:", mailer.mode, ")");
      } catch (err) {
        console.error("Transporter verify failed:", err?.message || err, err);
        return res.status(500).json({
          ok: false,
          message: "SMTP transporter verification failed. Check credentials, ports, or if host blocks outbound SMTP.",
          error: err?.message || err,
        });
      }

      try {
        const adminResult = await transporter.sendMail({
          from: `"Autism ABA Partners" <${process.env.FROM_EMAIL || process.env.ADMIN_EMAIL}>`,
          to: process.env.ADMIN_EMAIL,
          subject: adminSubject,
          text: adminText,
          html: adminHtml,
        });
        console.log("Admin mail sent:", adminResult?.messageId || adminResult);

        const userResult = await transporter.sendMail({
          from: `"Autism ABA Partners" <${process.env.FROM_EMAIL || process.env.ADMIN_EMAIL}>`,
          to: saved.email,
          subject: userSubject,
          text: userText,
          html: userHtml,
        });
        console.log("User mail sent:", userResult?.messageId || userResult);
      } catch (err) {
        // print detailed info if present
        console.error("SMTP sendMail error:", err?.message || err, err?.response || err);
        return res.status(500).json({
          ok: false,
          message: "Failed to send emails via SMTP. Check server logs for SMTP error.",
          error: err?.message || err,
        });
      }
    }

    // success
    return res.status(201).json({
      ok: true,
      message: "Inquiry processed successfully (emails dispatched)",
      contact: saved,
    });
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return res.status(500).json({
      ok: false,
      message: "Error creating inquiry",
      error: error?.message || error,
    });
  }
};

// --- other controllers unchanged (you can keep as-is) ---
export const getAllInquiry = async (req, res) => {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.leadSource) filter.leadSource = req.query.leadSource;

    const inquiries = await ContactLead.find(filter)
      .sort({ createdAt: -1 })
      .lean()
      .exec();

    return res.status(200).json({
      ok: true,
      count: inquiries.length,
      inquiries,
    });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return res.status(500).json({
      ok: false,
      message: "Error fetching inquiries",
      error,
    });
  }
};

export const deleteInquiry = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({ ok: false, message: "Missing id parameter" });

  try {
    const deleted = await ContactLead.findByIdAndDelete(id).exec();
    if (!deleted)
      return res.status(404).json({ ok: false, message: "Inquiry not found" });

    return res
      .status(200)
      .json({ ok: true, message: "Inquiry deleted successfully", id });
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    return res.status(500).json({
      ok: false,
      message: "Error deleting inquiry",
      error,
    });
  }
};

export const getInquiryById = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({ ok: false, message: "Missing id parameter" });

  try {
    const doc = await ContactLead.findById(id).lean().exec();
    if (!doc)
      return res.status(404).json({ ok: false, message: "Inquiry not found" });

    return res.status(200).json({ ok: true, inquiry: doc });
  } catch (error) {
    console.error("Error fetching inquiry:", error);
    return res.status(500).json({
      ok: false,
      message: "Error fetching inquiry",
      error,
    });
  }
};
