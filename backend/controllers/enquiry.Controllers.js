import Enquiry from "../models/Enquiry.models.js";

import { sendMail } from "../utils/sendMail.js";


export const createEnquiry = async (req, res) => {

  try {

    const { name, email, phone, message } =
      req.body;


    if (!name || !email || !phone) {

      return res.status(400).json({

        success: false,
        message: "All fields required",

      });

    }


    /* SAVE TO DATABASE */

    const enquiry =
      await Enquiry.create({

        name,
        email,
        phone,
        message,

      });



    /* EMAIL TO ADMIN */

    await sendMail({

      to: process.env.ADMIN_EMAIL,

      subject: "New Appointment Request",

      html: `

        <h2>New Enquiry Received</h2>

        <p><b>Name:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Phone:</b> ${phone}</p>

        <p><b>Message:</b> ${message}</p>

      `,

      replyTo: email,

    });



    /* EMAIL TO USER */

    await sendMail({

      to: email,

      subject:
        "We received your appointment request",

      html: `

        <h2>Thank you for contacting Dove Healthcare</h2>

        <p>Dear ${name},</p>

        <p>

        We have received your appointment request.

        Our team will contact you shortly.

        </p>

        <br>

        <p>Dove Healthcare Services</p>

      `,

    });



    res.status(200).json({

      success: true,
      message: "Enquiry sent successfully",

    });

  }

  catch (err) {

    console.error(err);

    res.status(500).json({

      success: false,
      message: "Server error",

    });

  }

};
