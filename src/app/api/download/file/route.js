import fs from "fs";
import path from "path";
import { connect } from "../../../../dbConfig/connectDB";
import Product from "../../../../models/product";
import { verifyToken } from "../../../../lib/jwt";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");
    if (!token) {
      return new Response("Unauthorized", { status: 401 });
    }
    let decoded;
    try {
      decoded = verifyToken(token);
    } catch (error) {
      return new Response("Link expired or invalid", { status: 401 });
    }

    const { productId, index } = decoded;
    await connect();
    const product = await Product.findById(productId);

    if (!product) return new Response("Product not found", { status: 404 });

    // TODO: Verify payment before sending file
    const filePath = product.files[index];

    if (!filePath) {
      return new Response("File not found", { status: 404 });
    }
    const absolutePath = path.join(process.cwd(), "pdfs", filePath);
    console.log("Looking for file at:", absolutePath);

    if (!fs.existsSync(absolutePath)) {
      return new Response("File missing on server", { status: 404 });
    }

    const fileStream = fs.createReadStream(absolutePath);

    return new Response(fileStream, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${path.basename(
          absolutePath
        )}"`, //auto download the files
      },
    });
  } catch (error) {
    console.error("File download error:", error);
    return new Response("Server error", { status: 500 });
  }
}
