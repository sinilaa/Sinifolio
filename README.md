# Sinifolio

## Project
Web Portfolio

## Description
This project is a personal web portfolio showcasing my work and skills as a web developer. It includes sections for about me, my skills and experience, my projects and contact information with contact form. It also includes a project management system for admin user, which can be used to create, edit and delete projects. The portfolio is designed to be responsive and visually appealing. 

## Used technologies
- **HTML**
- **CSS**
- **JavaScript**
- **React.js**
- **Express.js**
- **Node.js**
- **MongoDB Atlas**

## Used libraries
- **Mongoose**
- **React Router**
- **Remix Icon**
- **Heroicons**
- **Bcrypt.js**
- **Cookie Parser**
- **Cors**
- **Email.js**
- **JSON Web Token**
- **Multer**
- **Quill.js**


## File Structure

```
sinifolio/
│
├── client/
│   ├── public/
│   │   ├── assets/
│   │   │   └── CV.pdf
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.js
│   │   │   ├── Editor.js
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   │   └── Project.js
│   │   │
│   │   ├── contexts/
│   │   │   └── UserContext.js
│   │   │
│   │   ├── pages/
│   │   │   ├── AboutPage.js
│   │   │   ├── ContactPage.js
│   │   │   ├── CreateProject.js
│   │   │   ├── EditProject.js
│   │   │   ├── HomePage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── ProjectPage.js
│   │   │   └── ProjectsPage.js
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── reportWebVitals.js
│   │
│   ├── .gitignore
│   └── package.json
│
├── api/
│   ├── models/
│   │   ├── Project.js
│   │   └── User.js
│   │
│   ├── index.js
│   └── package.json
│
├── index.js
├── package.json
└── README.md
```

## Features

### Frontend

- **App.js**
    - Defines routes using React Router for different pages in the application.
- **Layout.js**
    - Defines the main layout structure of the application with a header, main content, and footer.
- **index.js**
    - Initializes the React application and renders the root component into the DOM.

### Pages

- **HomePage.js**
    - Displays a welcome message and brief introduction.
- **AboutPage.js** 
    -  Provides information about the developer's skills, experience, and a downloadable CV.
- **ProjectsPage.s**
    - Lists all the projects fetched from the server with details and links to individual project pages.
- **ProjectPage.js**
    - Displays detailed information about a specific project fetched from the server
    - Allows to authenticated users to move to edit project page or delete project.
- **ContactPage.js**
    - Displays contact information and a contact form to send messages.
- **LoginPage.js** 
    -  Displays login form and allows users to log in.
- **CreateProject.js**
    - Allows authenticated users to create new projects.
- **EditProject.js**
    - Allows authenticated users to edit existing projects.

### Components

- **ContactForm.js**
    - Renders a contact form allowing users to send messages via EmailJS.
    - Used for contact page.
- **Editor.js**
    - Renders a text editor using ReactQuill for rich text editing capabilities.
    - Used for create and edit project.
- **Footer.js** 
    - Displays social media links in the footer section of the application.
- **Header.js**
    - Represents the header/navigation bar of the application.
    - Handles user authentication and displays different navigation links accordingly.
    - Provides a responsive menu for mobile/ipad view with toggle functionality.
    - Fetches user profile information and allows user logout.
- **Project.js**
    - Displays and renders individual project details with a title, summary, and cover image.
    - Provides a link to the detailed project page for more information.

### Styles (App.css)

- **Variables CSS** 
    - Defines variables for colors, fonts, sizes, and other properties used throughout the stylesheet.
- **Base** 
    - Resets default margin and padding, sets up the default body and container styles.
- **Header & Nav**
    - Styles for the header section and navigation menu.
- **Home Page**
    - Styles for the the Home page, including the main title and subtitle.
- **About Page**
    - Styles for the About page, including introduction, skills and CV button.
- **Projects Page**
    - Styles for the Projects page, including project images, summary and links to project page.
- **Project Page**
    - Styles for the Project page content, including texts, images and links.
- **Editor**
    - Styles for the Editor, including content and input area.
- **Create, edit and delete** 
    - Styles for the Create and Edit pages and buttons.
- **Login page** 
    - Styles for Login form.
- **Footer**
    - Styles for the footer section and footer social media links.
- **Media Queries**
    - Responsiveness for small, medium and large devices, adjusting styles based on screen size.

### Backend

- **index.js**
    - Backend server using Express.js to handle API requests and interact with the database.
    - Utilizes Express.js for server setup, MongoDB for database, bcryptjs for password hashing, JWT for authentication, multer for file uploads.
    - User authentication (login, logout), project creation, update, retrieval, and deletion.
    - Handles user login/logout operations with JWT authentication.
    - Manages CRUD operations for projects with file uploads.
 
### Models

- **User.js** 
    -  Defines the schema for the User model using Mongoose.
    -  Defines the UserSchema with fields like username and password.
    -  Creates the UserModel using the schema and exports it for use in other files.
- **Project.js**
    - Defines the schema for the Project model using Mongoose.
    - Defines the ProjectSchema with fields like title, summary, content, cover image, and author reference.
    - Creates the Project model using the schema and exports it for use in other files.

### Contexts

- **UserContext**
    - Manages user information using React context API.
    - UserContextProvider component wraps its children components and provides access to user information through the UserContext.
  
