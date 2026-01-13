import { connect } from "../../../dbConfig/connectDB";
import Product from "../../../models/product";
import nodemailer from "nodemailer";
import { generateDownloadToken } from "../../../lib/jwt";
export async function POST(req) {
  try {
    const { productId, userEmail } = await req.json();
    await connect();

    const product = await Product.findById(productId);

    if (!product || !product.files || product.files.length === 0) {
      return Response.json({ message: "No files found" }, { status: 404 });
    }

    // Generate links for ALL files
    const downloadLinks = product.files.map((_, index) => {
      const token = generateDownloadToken(productId, index);
      return `${process.env.BASE_URL}/api/download/file?token=${token}`;
    });

    //nodemailer

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const htmlLinks = downloadLinks
      .map((link, i) => `<p> File ${i + 1}: <a href="${link}">Download</a></p>`)
      .join("");  
    const html = `
  <div style="
    font-family: Arial, sans-serif;
    background-color: #f7f9fc;
    padding: 32px;
    color: #333;
  ">

    <div style="
      max-width: 600px;
      margin: auto;
      background: #ffffff;
      border-radius: 12px;
      padding: 32px;
      border: 1px solid #e5e9f2;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    ">

      <!-- Header -->
      <h2 style="text-align: center; color: #1e3a8a; font-size: 26px; margin-bottom: 10px;">
        Your Downloads Are Ready!
      </h2>
      <p style="text-align: center; color: #64748b; font-size: 14px; margin-top: 0;">
        Thank you for your purchase from <strong>CSEHeavens</strong>
      </p>

      <!-- Success Box -->
      <div style="
        background-color: #eff6ff;
        border-left: 4px solid #3b82f6;
        padding: 16px;
        border-radius: 8px;
        margin-top: 20px;
        margin-bottom: 25px;
      ">
        <p style="margin: 0; color: #1e3a8a; font-size: 15px;">
          Your digital files are available below.  
          <strong>These links will expire in 15 minutes.</strong>
        </p>
      </div>

      <!-- Download Links -->
      <div style="margin-top: 20px;">
        <h3 style="color: #1e3a8a; font-size: 18px; margin-bottom: 12px;">
          Download Your Files:
        </h3>

        ${downloadLinks
          .map(
            (link, i) => `
            <div style="
              background: #f1f5f9;
              padding: 12px 16px;
              border-radius: 8px;
              margin-bottom: 10px;
              border: 1px solid #e2e8f0;
            ">
              <a href="${link}" style="
                color: #2563eb;
                text-decoration: none;
                font-weight: 600;
              ">📄 File ${i + 1} — Download</a>
            </div>
          `
          )
          .join("")}
      </div>

      <!-- Divider -->
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />

      <!-- Footer -->
      <p style="color: #64748b; font-size: 14px;">
        If you face any issues with your download links, reply to this email and our support team will assist you.
      </p>

      <p style="color: #1e293b; font-size: 16px; margin-top: 25px;">
        Regards,<br/>
        <strong>CSEHeavens Team</strong>
      </p>
    </div>
  </div>
`;

    await transporter.sendMail({
      from: `"CSEHeavens" <${process.env.MAIL_USER}>`,
      to: userEmail,
      subject: `Your Downloads for ${product.title}`,
      html: html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
