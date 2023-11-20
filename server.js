const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
// const multer = require('multer');
// const upload = multer();
// const path = require('path');

app.use(cors());

// Parse application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// Parse application/json
app.use(express.json());

// Handle root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'assets')));

// Handle form submission
app.post('/submit', (req, res) => {
  let name = req.body.name?.toString();
  let domain = req.body?.domain.toString();
  let techStack = req.body.techStack?.toString();

  console.log('Name:', name);
  console.log('Domain', domain);
  console.log('Tech Stack:', techStack);

  return res.send(req.body);
});
app.get('/hello', (req, res) => {
  res.json({ Hello: 'World' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
