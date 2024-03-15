import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";

// Component for editing a project
export default function EditProject() {
  const { id } = useParams(); // Get project ID from URL params
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  // Fetch project information on component mount
  useEffect(() => {
    fetchProjectInfo(); // Call function to fetch project information
  }, []);

  // Function to fetch project information
  async function fetchProjectInfo() {
    try {
      const response = await fetch(`http://localhost:4000/project/${id}`);
      const projectInfo = await response.json();
      setTitle(projectInfo.title);
      setContent(projectInfo.content);
      setSummary(projectInfo.summary);
    } catch (error) {
      console.error('Error fetching project information:', error);
    }
  }

  // Function to update project
  async function updateProject(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
    if (files?.[0]) {
      data.set('file', files?.[0]);
    }
    const response = await fetch('http://localhost:4000/project', {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true); // Redirect to project page after successful update
    }
  }

  // Redirect to project page if redirect state is true
  if (redirect) {
    return <Navigate to={`/project/${id}`} />;
  }

  // Render form for updating project
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <div className="main container">
          <form onSubmit={updateProject}>
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
            <Editor onChange={setContent} value={content} />
            <button style={{ marginTop: '5px' }}>Update project</button>
          </form>
        </div>
      </div>
    </main>
  );
}
