import Appointment from "../models/appointment.models.js";

import { sendMail } from "../utils/sendMail.js";


export async function createAppointment(req, res) {

  try {

    const {
      name,
      email,
      phone,
      service,
      date,
      message
    } = req.body;


    if (!name || !email || !phone) {

      return res.status(400).json({

        ok: false,
        message: "Required fields missing",

      });

    }


    /* SAVE DATABASE */

    const appointment =
      await Appointment.create({

        name,
        email,
        phone,
        service,
        date,
        message,

      });



    /* EMAIL ADMIN */

    await sendMail({

      to: process.env.ADMIN_EMAIL,

      subject: "New Appointment Booked",

      html: `

        <h2>New Appointment Request</h2>

        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Service: ${service}</p>
        <p>Date: ${date}</p>
        <p>Message: ${message}</p>

      `,

      replyTo: email,

    });



    /* EMAIL USER */

    await sendMail({

      to: email,

      subject:
        "Appointment Request Received",

      html: `

        <h2>Dear ${name}</h2>

        <p>

        Thank you for booking an appointment.

        Our team will contact you shortly.

        </p>

        <br>

        <p>Dove Healthcare Services</p>

      `,

    });



    res.json({

      ok: true,
      message: "Appointment booked",

    });

  }

  catch (err) {

    console.error(err);

    res.status(500).json({

      ok: false,
      message: "Server error",

    });

  }

}
