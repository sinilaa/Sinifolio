import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Editor from "../components/Editor";

// Component for creating a new project
export default function CreateProject() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  // Function to handle creation of a new project
  async function createNewProject(ev) {
    ev.preventDefault();

    // Check that all required fields are filled
    if (!title || !summary || !content || !files) {
      alert('Please fill in all required fields (title, summary, content and file)');
      return;
    }

    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/project`, {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true); // Redirect to home page after successful creation
    }
  }

  // Redirect to projects page if redirect state is true
  if (redirect) {
    return <Navigate to={'/projects'} />;
  }

  // Render form for creating a new project
  return (
    <div className="main container">
      <Helmet>
        <title>Create project</title>
        <meta name="description" content="This page is for creating new projects" />
      </Helmet>

    <h2 className="subtitle">Create new project!</h2>    
      <form onSubmit={createNewProject} className="editor">
        <input type="title"
          placeholder={'Title'}
          value={title}
          onChange={ev => setTitle(ev.target.value)}
        />

        <input
          type="summary"
          placeholder={'Summary'}
          value={summary}
          onChange={ev => setSummary(ev.target.value)}
        />

        <input
          type="file"
          onChange={ev => setFiles(ev.target.files)}
        />

        {/* Using custom Editor component for project content */}
        <Editor value={content} onChange={setContent} />

        <button className="create_btn">
          <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-6 h-6">
          <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M9 12.75 11.25 15 15 9.75M21 
            12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>Create</button>
      </form>
    </div>
  );
}
