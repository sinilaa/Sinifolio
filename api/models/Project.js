const mongoose = require('mongoose');
const {Schema,model} = mongoose;

// Define the schema for the Project model
const ProjectSchema = new Schema({
  title: String,
  summary: String,
  content: String,
  cover: String,
  author:{type:Schema.Types.ObjectId, ref:'User'}, // References the User model
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt timestamps
});

// Create the Project model using the schema
const ProjectModel = model('Project', ProjectSchema);

// Export the Project model for use in other files
module.exports = ProjectModel;
