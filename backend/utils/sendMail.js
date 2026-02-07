 import { Resend } from "resend";

let resend = null;

export const sendMail = async ({
  to,
  subject,
  html,
  text,
  replyTo,
  attachments   // ✅ ADD THIS
}) => {
  try {

    if (!process.env.RESEND_API_KEY) {
      console.warn("⚠️ RESEND_API_KEY missing. Email skipped.");
      return;
    }

    if (!to) {
      console.warn("⚠️ Email skipped: recipient missing");
      return;
    }

    if (!html && !text) {
      console.warn("⚠️ Email skipped: no content");
      return;
    }

    if (!resend) {
      resend = new Resend(process.env.RESEND_API_KEY);
    }

    const { data, error } = await resend.emails.send({

      from: process.env.EMAIL_FROM || "onboarding@resend.dev",

      to,
      subject,
      html,
      text,

      attachments, // ✅ NOW VALID

      reply_to: replyTo ? [replyTo] : undefined,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      throw new Error(error.message);
    }

    console.log("✅ Email sent:", data.id);
    return data;

  } catch (err) {

    console.error("❌ Email failed:", err.message);

  }
};
