import NurseRequest from "../models/Request.models.js";
import { sendMail } from "../utils/sendMail.js";

export const createRequest = async (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      location
    } = req.body;


    /* Validation */

    if (!name || !phone || !location) {
      return res.status(400).json({
        message: "Name, Phone and Location are required"
      });
    }


    /* Save DB */

    const request = await NurseRequest.create({

      name,
      email,
      phone,
      location

    });


    /* ================= ADMIN MAIL ================= */

    const adminHtml = `
      <h2>New Nurse Service Request</h2>

      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email || "N/A"}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Location:</b> ${location}</p>
    `;


    await sendMail({

      to: process.env.RECEIVER_EMAIL,

      subject: "New Nurse Service Request",

      html: adminHtml

    });


    /* ================= USER MAIL ================= */

    if (email) {

      await sendMail({

        to: email,

        subject: "Request Received - Zenithcare",

        html: `
          <h3>Dear ${name},</h3>

          <p>
            Thank you for requesting nursing services from Zenithcare.
          </p>

          <p>
            Our team will contact you shortly.
          </p>

          <br/>

          <p>Regards,<br/>Zenithcare Team</p>
        `

      });

    }


    /* Response */

    res.status(201).json({

      success: true,

      message: "Request submitted successfully"

    });

  } catch (err) {

    console.error("Request Error:", err);

    res.status(500).json({

      success: false,

      message: "Server error"

    });
  }
};
