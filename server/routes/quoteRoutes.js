const express = require("express");
const router = express.Router();
const Quote = require("../models/Quote");
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    const { plan, city, address, date, phone } = req.body;

    const quote = new Quote({
      plan,
      city,
      address,
      date,
      phone,
    });

    await quote.save();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"SwiftShift Movers" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Moving Quote Request 🚚",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Plan:</strong> ${plan}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    res.status(201).json({ message: "Quote saved & email sent" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;