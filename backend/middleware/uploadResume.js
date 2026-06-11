 import multer from "multer";
import fs from "fs";
import path from "path";

const dir = process.env.UPLOAD_DIR || "uploads";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const storage = multer.diskStorage({

  destination: dir,

  filename: (req, file, cb) => {

    const ext = path.extname(file.originalname);

    cb(null, Date.now() + ext);
  }

});

const filter = (req, file, cb) => {

  if (
    file.mimetype === "application/pdf" ||
    file.mimetype.includes("word")
  ) {
    cb(null, true);
  } else {
    cb("Only PDF / DOC allowed");
  }
};

export default multer({
  storage,
  fileFilter: filter,
  limits: { fileSize: 5 * 1024 * 1024 }
});
