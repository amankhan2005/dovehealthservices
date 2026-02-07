 import Application from "../models/Application.models.js";
import { sendMail } from "../utils/sendMail.js";

import fs from "fs";
import path from "path";

export const applyNurse = async (req, res) => {

  try {

    /* ================= CHECK FILE ================= */

    if (!req.file) {
      return res.status(400).json({
        message: "Resume is required"
      });
    }


    /* ================= GET DATA ================= */

    const {
      name,
      email,
      phone,
      location,
      availability,
      experience
    } = req.body;


    /* ================= SAVE IN DB ================= */

    const application = await Application.create({

      name,
      email,
      phone,
      location,
      availability,
      experience,
      resume: req.file.filename

    });


    /* ================= FILE PATH ================= */

    const filePath = path.join(
      process.cwd(),
      process.env.UPLOAD_DIR,
      req.file.filename
    );


    if (!fs.existsSync(filePath)) {
      return res.status(500).json({
        message: "Resume file missing"
      });
    }


    const fileBuffer = fs.readFileSync(filePath);


    /* ================= COMPANY INFO ================= */

    const companyInfo = `
      <p style="color:#444;font-size:14px;line-height:1.6;">
        <b>Zenithcare</b> provides professional nursing and therapy services
        focused on comfort, safety, and patient well-being.
        Our certified team delivers reliable care at home and in hospitals
        with dignity and respect.
      </p>
    `;


    /* ================= ADMIN EMAIL ================= */

    const adminHtml = `
      <div style="font-family:Arial,sans-serif;padding:20px;">

        <h2 style="color:#2563eb;">
          📋 New Nurse Application Received
        </h2>

        <hr/>

        <table style="width:100%;font-size:14px;line-height:1.8;">

          <tr><td><b>Name:</b></td><td>${name}</td></tr>
          <tr><td><b>Email:</b></td><td>${email}</td></tr>
          <tr><td><b>Phone:</b></td><td>${phone}</td></tr>
          <tr><td><b>Location:</b></td><td>${location}</td></tr>
          <tr><td><b>Availability:</b></td><td>${availability}</td></tr>
          <tr><td><b>Experience:</b></td><td>${experience}</td></tr>

        </table>

        <hr/>

        ${companyInfo}

        <p style="margin-top:15px;">
          📎 Resume is attached with this email.
        </p>

      </div>
    `;


    /* ================= SEND ADMIN MAIL ================= */

    await sendMail({

      to: process.env.RECEIVER_EMAIL,

      subject: "New Nurse Application - Zenithcare",

      html: adminHtml,

      attachments: [
        {
          filename: req.file.originalname,
          content: fileBuffer.toString("base64")
        }
      ]

    });


    /* ================= USER THANK YOU MAIL ================= */

    try {

      const userHtml = `
        <div style="font-family:Arial,sans-serif;padding:20px;">

          <h2 style="color:#16a34a;">
            ✅ Application Received
          </h2>

          <p>Dear <b>${name}</b>,</p>

          <p>
            Thank you for applying at <b>Zenithcare</b>.
            We have successfully received your application.
          </p>

          ${companyInfo}

          <p>
            Our recruitment team will review your profile.
            If you are shortlisted, we will contact you shortly.
          </p>

          <br/>

          <p>Warm Regards,</p>

          <p>
            <b>Zenithcare Team</b><br/>
            www.gentleheartshha.com
          </p>

        </div>
      `;


      await sendMail({

        to: email,

        subject: "Thank You for Applying at Zenithcare",

        html: userHtml

      });

    } catch (userMailErr) {

      console.warn("⚠️ User email failed:", userMailErr.message);

    }


    /* ================= DELETE FILE (OPTIONAL) ================= */

    if (process.env.DELETE_RESUME_AFTER_EMAIL === "true") {
      fs.unlinkSync(filePath);
    }


    /* ================= RESPONSE ================= */

    res.status(201).json({

      success: true,

      message: "Application submitted successfully"

    });


  } catch (err) {

    console.error("Apply Error:", err);

    res.status(500).json({

      success: false,

      message: "Server error"

    });
  }
};
