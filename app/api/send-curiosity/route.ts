import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Missing email" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MY_MAIL,
        pass: process.env.MY_MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Progrize Curiosity" <${process.env.MY_MAIL}>`,
      to: process.env.MY_MAIL,
      subject: "New Curiosity Submission",
      text: `Name: ${name}\nEmail: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.log("Mail error:", error);
    return NextResponse.json(
      { error: "Mail failed" },
      { status: 500 }
    );
  }
}
