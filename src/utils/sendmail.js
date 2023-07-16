const nodemailer = require("nodemailer");

module.exports = async (email, subject, body) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        secure: true,
        auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
    });
    await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: email,
        subject,
        html: body,
    });
};
