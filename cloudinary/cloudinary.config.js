import cloudinaryModule from "cloudinary";
import "dotenv/config";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});


export const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "workfloe",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

export default cloudinary;
