import fs from "fs";
import path from "path";
import { connect } from "../../../../dbConfig/connectDB";
import Product from "../../../../models/product";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");
    const index = parseInt(searchParams.get("index"));
    await connect();

    if (!productId || isNaN(index)) {
      return new Response("Invalid request", { status: 400 });
    }

    const product = await Product.findById(productId);
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
