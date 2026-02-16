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

<div style="
  font-family:Arial,sans-serif;
  padding:24px;
  background:#f8fafc;
">

  <!-- HEADER -->

  <div style="
    background:#38bdf8;
    padding:16px 20px;
    border-radius:8px;
    color:white;
  ">

    <h2 style="margin:0;">
      New Enquiry Received
    </h2>

    <p style="
      margin:4px 0 0 0;
      font-size:13px;
      opacity:.9;
    ">
      Dove Healthcare Services
    </p>

  </div>



  <!-- BODY -->

  <div style="
    background:white;
    padding:20px;
    margin-top:16px;
    border-radius:8px;
    border:1px solid #e5e7eb;
  ">


    <h3 style="
      margin-top:0;
      color:#0f172a;
    ">
      Client Information
    </h3>


    <table style="
      width:100%;
      font-size:14px;
      line-height:1.8;
    ">


      <tr>
        <td width="120"><b>Name:</b></td>
        <td>
          ${escapeHtml(c.firstName)}
          ${escapeHtml(c.lastName)}
        </td>
      </tr>


      <tr>
        <td><b>Email:</b></td>
        <td>
          ${escapeHtml(c.email)}
        </td>
      </tr>


      <tr>
        <td><b>Phone:</b></td>
        <td>
          ${escapeHtml(c.phone)}
        </td>
      </tr>


    </table>



    <!-- MESSAGE -->


    <h3 style="
      margin-top:20px;
      color:#0f172a;
    ">
      Message
    </h3>


    <div style="
      background:#f1f5f9;
      padding:14px;
      border-left:4px solid #F39C6B;
      border-radius:6px;
      font-size:14px;
    ">

      ${escapeHtml(c.message)}

    </div>



  </div>



  <!-- FOOTER -->


  <div style="
    margin-top:18px;
    font-size:13px;
    color:#334155;
    line-height:1.6;
  ">


    <b>About Dove Healthcare Services</b><br/>

    Dove Healthcare Services provides compassionate,
    evidence-based behavioral health care including
    Psychiatric Rehabilitation Programs (PRP),
    Outpatient Mental Health Clinic (OMHC),
    and counseling services.

    <br/><br/>

    Our mission is to empower individuals to achieve
    emotional stability, independence, and long-term recovery.


  </div>



  <!-- TECH INFO -->


  <div style="
    margin-top:18px;
    font-size:12px;
    color:#64748b;
  ">


    <b>Technical Details</b><br/>

    IP Address:
    ${escapeHtml(c.ipAddress || "Unknown")}<br/>

    Browser:
    ${escapeHtml(c.userAgent || "Unknown")}


  </div>



</div>

`;


/* ================= USER EMAIL ================= */

 const userHtml = (c) => `

<div style="
  font-family:Arial,sans-serif;
  padding:24px;
  background:#f8fafc;
">


  <!-- HEADER -->


  <div style="
    background:#38bdf8;
    padding:16px 20px;
    border-radius:8px;
    color:white;
  ">


    <h2 style="margin:0;">
      We’ve Received Your Enquiry
    </h2>


    <p style="
      margin:4px 0 0 0;
      font-size:13px;
      opacity:.9;
    ">

      Dove Healthcare Services

    </p>


  </div>



  <!-- BODY -->


  <div style="
    background:white;
    padding:20px;
    margin-top:16px;
    border-radius:8px;
    border:1px solid #e5e7eb;
  ">



    <p>

      Hello
      <b>
        ${escapeHtml(c.firstName)}
      </b>,

    </p>



    <p>

      Thank you for reaching out to
      <b>Dove Healthcare Services</b>.

    </p>



    <p>

      Your enquiry has been successfully received.
      Our mental health professionals will review your message
      and contact you as soon as possible.

    </p>



    <p>

      We are committed to providing compassionate,
      confidential, and professional behavioral health care.

    </p>



    <!-- MESSAGE COPY -->


    <h3 style="
      margin-top:20px;
      color:#0f172a;
    ">

      Your Message

    </h3>



    <div style="
      background:#f1f5f9;
      padding:14px;
      border-left:4px solid #F39C6B;
      border-radius:6px;
      font-size:14px;
    ">

      ${escapeHtml(c.message)}

    </div>



  </div>



  <!-- FOOTER -->


  <div style="
    margin-top:18px;
    font-size:13px;
    color:#334155;
    line-height:1.6;
  ">


    <b>About Dove Healthcare Services</b><br/>


    Dove Healthcare Services provides specialized behavioral health care
    including Psychiatric Rehabilitation Programs (PRP),
    Outpatient Mental Health Clinic (OMHC),
    and counseling services.


    <br/><br/>


    Our mission is to help individuals achieve emotional stability,
    independence, and long-term recovery.


  </div>



  <!-- SIGNATURE -->


  <div style="
    margin-top:20px;
    font-size:14px;
  ">


    Warm regards,<br/><br/>


    <b>Dove Healthcare Services Team</b><br/>


    Email:
    info@dovehealthservices.com
<br/>


    Phone:
    +1 410-988-2335


  </div>



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
