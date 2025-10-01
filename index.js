var express = require('express');
var cors = require('cors');
var multer = require('multer'); // Multer dependency
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

// --- UPDATED Multer Configuration ---
// Use memory storage since we only need metadata (name, type, size)
// and don't need to persist the physical file on the server.
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// ------------------------------------

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// POST endpoint using the 'upfile' field name (Tests 3 & 4)
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  
  // Check if Multer successfully processed and populated req.file
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded or file processing failed' });
  }

  // Retrieve the metadata from req.file (Test 4)
  const fileMetadata = {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size // size is in bytes
  };

  // Send the required JSON response
  res.json(fileMetadata);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
