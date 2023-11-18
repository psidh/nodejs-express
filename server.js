const express = require('express');

const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer();
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Parse application/json
app.use(express.json());

// Handle root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', upload.none(), (req, res) => {
    console.log('Body:', req.body);

    let name = req.body.name?.toString();
    let techStack = req.body.techStack?.toString();

    console.log('Name:', name);
    console.log('Tech Stack:', techStack);
        
    res.json({
        success: true,
        user: { name, techStack }
    });
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
