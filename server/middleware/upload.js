const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
  if (file.fieldname === "book") {
  return {
    folder: "elibrary/books",
    resource_type: "raw",
    format: "pdf",          // ✅ force correct format
    use_filename: true,     // ✅ keep original name
    unique_filename: false, // ✅ cleaner URL
  };
}

    if (file.fieldname === "cover") {
      return {
        folder: "elibrary/covers",
        resource_type: "image",
        allowed_formats: ["jpg", "png", "jpeg", "webp"],
      };
    }

    throw new Error("Invalid file type");
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 },
});

module.exports = upload;