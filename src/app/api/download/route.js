import { connect } from "../../../dbConfig/connectDB";
import Product from "../../../models/product";

export async function POST(req) {
  try {
    const { productId } = await req.json();

    if (!productId) {
      return Response.json(
        { message: "Product ID is required" },
        { status: 400 }
      );
    }

    await connect();

    const product = await Product.findById(productId);

    if (!product) {
      return Response.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    if (!product.files || product.files.length === 0) {
      return Response.json(
        { message: "No files found for this product" },
        { status: 404 }
      );
    }

    const downloadLinks = product.files.map((filePath) => {
      return `${process.env.NEXT_PUBLIC_BASE_URL}${filePath}`;
    });

    return Response.json(
      {
        success: true,
        files: downloadLinks,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Download API Error:", error);
    return Response.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
