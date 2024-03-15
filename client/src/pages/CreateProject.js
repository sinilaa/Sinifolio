import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";
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
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/project', {
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
    <main className="main-content">
      <div className="content-wrapper">
        <div className="main container">
          <form onSubmit={createNewProject} className="editor">
            <input
              type="title"
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
            <Editor value={content} onChange={setContent} />
            <button style={{ marginTop: '5px' }}>Create</button>
          </form>
        </div>
      </div>
    </main>
  );
}
