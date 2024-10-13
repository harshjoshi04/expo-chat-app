import nodemailer from "nodemailer";

export const sendOtpEmail = async (toEmail, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your OTP Code</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  color: #333;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  width: 100%;
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #fff;
                  border-radius: 8px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  padding: 20px;
                  text-align: center;
              }
              .header {
                  background-color: #4CAF50;
                  padding: 20px;
                  border-top-left-radius: 8px;
                  border-top-right-radius: 8px;
                  color: white;
                  font-size: 24px;
                  font-weight: bold;
              }
              .otp-code {
                  font-size: 36px;
                  font-weight: bold;
                  color: #4CAF50;
                  margin: 20px 0;
              }
              .message {
                  font-size: 18px;
                  color: #666;
                  margin-bottom: 30px;
              }
              .footer {
                  font-size: 12px;
                  color: #999;
                  margin-top: 20px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <p class="message">Use the following OTP to complete your process. The OTP is valid for the next 10 minutes.</p>
              <div class="otp-code">${otp}</div>
              <p>If you did not request this, please ignore this email.</p>
              <div class="footer">
                  &copy; 2024 Your Company. All rights reserved.
              </div>
          </div>
      </body>
      </html>
    `;

    // Define mail options
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS, // sender address
      to: toEmail, // receiver email
      subject: "Your OTP Code",
      html: htmlTemplate, // HTML body
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    return info.response;
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw new Error("Could not send OTP email");
  }
};
