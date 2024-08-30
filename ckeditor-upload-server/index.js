const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 3001;
const cors = require("cors");
app.use(cors());


// Configure Multer to store uploaded files in the 'uploads' directory
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({storage: storage});

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Endpoint to handle image uploads
app.post("/upload", upload.single("upload"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({error: "No file uploaded"});
  }

  // Return the URL of the uploaded file
  res.json({
    url: `http://localhost:3001/uploads/${req.file.filename}`,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
