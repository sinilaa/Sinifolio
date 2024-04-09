const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const Project = require('./models/Project');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const uploadMiddleware = multer({ dest: 'uploads/' });

// Add CORS middleware and specify allowed origins
app.use(cors({ credentials: true, origin: ['http://localhost:3000', 'https://sinifolio.onrender.com'] }));
// Parse request body to JSON
app.use(express.json());
// Handle cookies
app.use(cookieParser());
// Serve static files
app.use('/uploads', express.static(__dirname + '/uploads'));

// Connect to MongoDB database using environment variable for URI
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Hashing salt for bcrypt and JWT secret
const secret = process.env.TOKEN_SECRET;

// User login
app.post('/login', async (req, res) => {
  // Extract username and password from request body
  const { username, password } = req.body;
  // Find user in database based on username
  const userDoc = await User.findOne({ username });
  // Check if user exists and password matches
  if (!userDoc || !bcrypt.compareSync(password, userDoc.password)) { // Check if user does not exist or password is incorrect
    // Respond with error message for wrong credentials
    return res.status(400).json({ error: '* Wrong username or password' }); // Send error message as JSON object
  }

  // Generate JWT token for logged-in user
  jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
    if (err) throw err;
    // Set the JWT token in a cookie and respond with user info
    res.cookie('token', token).json({
      id: userDoc._id,
      username,
    });
  });
});

// Get user profile (requires authentication)
app.get('/profile', (req, res) => {
  // Extract JWT token from cookie
  const { token } = req.cookies;
  // Verify and decode the token to get user information
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    // Respond with user information
    res.json(info);
  });
});

// User logout
app.post('/logout', (req, res) => {
  // Clear JWT token from cookie and respond with success message
  res.cookie('token', '').json('ok');
});

// Create new project (requires authentication and file upload)
app.post('/project', uploadMiddleware.single('file'), async (req, res) => {
  // Extract file information and user information from request
  const { originalname, path } = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path + '.' + ext;
  fs.renameSync(path, newPath);

  // Extract user information from JWT token
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    // Extract project information from request body
    const { title, summary, content } = req.body;
    // Create a new project in the database with file path and author information
    const projectDoc = await Project.create({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
    });
    res.json(projectDoc);
  });
});

// Update project (requires authentication and file upload)
app.put('/project', uploadMiddleware.single('file'), async (req, res) => {
  let newPath = null;
  if (req.file) {
    // Rename and save uploaded file with new path
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
  }

  // Extract user information from JWT token
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    // Extract project information from request body
    const { id, title, summary, content } = req.body;
    // Find the project in the database by ID
    const projectDoc = await Project.findById(id);
    // Check if the logged-in user is the author of the project
    const isAuthor = JSON.stringify(projectDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json('you are not the author');
    }
    // Update project information with new values or keep existing values
    await projectDoc.update({
      title,
      summary,
      content,
      cover: newPath ? newPath : projectDoc.cover,
    });

    res.json(projectDoc);
  });
});

// Get all projects
app.get('/project', async (req, res) => {
  // Retrieve all projects from the database, populate author details, and sort by creation date
  res.json(
    await Project.find()
      .populate('author', ['username'])
      .sort({ createdAt: -1 })
  );
});

// Get single project by ID
app.get('/project/:id', async (req, res) => {
  // Extract project ID from request parameters
  const { id } = req.params;
  // Find and populate project details with author information
  const projectDoc = await Project.findById(id).populate('author', ['username']);
  res.json(projectDoc);
});

// Delete project by ID
app.delete('/project/:id', async (req, res) => {
  // Extract project ID from request parameters
  const { id } = req.params;
  try {
    // Find and delete project by ID
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully', deletedProject });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Fetch EmailJS configuration from environment variables
app.get('/api/emailjs/config', (req, res) => {
  // Construct EmailJS configuration object from environment variables
  const emailjsConfig = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    public_key: process.env.EMAILJS_PUBLIC_KEY,
  };
  res.json(emailjsConfig);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;