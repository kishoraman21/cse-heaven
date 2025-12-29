import { v2 as cloudinary } from "cloudinary";

if (
  !process.env.CLOUDINARY_CLOUD_NAME ||
  !process.env.CLOUDINARY_API_KEY ||
  !process.env.CLOUDINARY_API_SECRET
) {
  throw new Error("Cloudinary environment variables are missing");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// Generating a signed download URL for a PDF
export function generateSignedPdfUrl(fileKey, expiresInSeconds = 600) {
  return cloudinary.utils.private_download_url(fileKey, "pdf", {
    expires_at: Math.floor(Date.now() / 1000) + expiresInSeconds,
  });
}

// Generating signed URLs for multiple PDFs
export function generateMultipleSignedPdfUrls(
  fileKeys,
  expiresInSeconds = 600
) {
  return fileKeys.map((fileKey) =>
    generateSignedPdfUrl(fileKey, expiresInSeconds)
  );
}

export default cloudinary;
