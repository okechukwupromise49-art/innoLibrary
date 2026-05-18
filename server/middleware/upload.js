const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(), // ✅ required for Supabase
  limits: { fileSize: 100 * 1024 * 1024 },
});

module.exports = upload;