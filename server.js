// Import dependencies
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer'); // optional if you want emails
require('dotenv').config(); // optional for storing secrets

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// =========================
// ROUTES
// =========================

// Signup form submission
app.post('/signup', (req, res) => {
    const formData = req.body;
    console.log('Signup Data:', formData);

    // Example: Send email using nodemailer (optional)
    /*
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    transporter.sendMail({
        from: formData.email,
        to: process.env.EMAIL_USER,
        subject: `New Signup from ${formData.firstName} ${formData.lastName}`,
        text: JSON.stringify(formData, null, 2)
    }).catch(console.error);
    */

    // Send success response to frontend
    res.json({ success: true });
});

// Contact form submission
app.post('/contact', (req, res) => {
    const formData = req.body;
    console.log('Contact Data:', formData);

    // Example: Send email using nodemailer (optional)
    /*
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    transporter.sendMail({
        from: formData.email,
        to: process.env.EMAIL_USER,
        subject: `New Contact Message from ${formData.name}`,
        text: JSON.stringify(formData, null, 2)
    }).catch(console.error);
    */

    // Send success response to frontend
    res.json({ success: true });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
