import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Editor from "../components/Editor";

// Component for editing a project
export default function EditProject() {
  const { id } = useParams(); // Get project ID from URL params
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState('');

  // Fetch project information on component mount
  useEffect(() => {
    fetchProjectInfo(); // Call function to fetch project information
  }, []);

  // Function to fetch project information
  async function fetchProjectInfo() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/project/${id}`);
      const projectInfo = await response.json();
      setTitle(projectInfo.title);
      setContent(projectInfo.content);
      setSummary(projectInfo.summary);
    } catch (error) {
      console.error('Error fetching project information:', error);
      setError('Failed to fetch project information. Please try again.');
    }
  }

  // Function to update project
  async function updateProject(ev) {
    ev.preventDefault();

    // Check that all required fields are filled
    if (!title || !summary || !content) {
      alert('Please fill in all required fields (title, summary, content and file)');
      return;
    }

    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
    if (files?.[0]) {
      data.set('file', files?.[0]);
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/project`, {
        method: 'PUT',
        body: data,
        credentials: 'include',
      });

      if (response.ok) {
        setRedirect(true); // Redirect to project page after successful update
      } else {
        throw new Error('Failed to update project'); // Throw an error if response is not ok
      }
    } catch (error) {
      console.error('Error updating project:', error); // Log the error to console
      // Set error message to state
      setError('Failed to update project. Please try again.');
    }
  }

  // Redirect to project page if redirect state is true
  if (redirect) {
    return <Navigate to={`/api/project/${id}`} />;
  }

  // Render form using the Editor component for updating project
  return (
    <div className="main container">
      <Helmet>
        <title>Edit project</title>
        <meta name="description" content="This page is for editing projects" />
      </Helmet>

      <h2 className="subtitle">Editing...</h2> 
      <form onSubmit={updateProject} className="editor">
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

        {/* Using custom Editor component for project content */}
        <Editor onChange={setContent} value={content} />

        <button className="update_btn">
          <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-6 h-6">
          <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M16.023 9.348h4.992v-.001M2.985 
            19.644v-4.992m0 0h4.992m-4.993 0 3.181 
            3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 
            9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 
            3.182m0-4.991v4.99" />
        </svg>Update</button>
      </form>

      {/* Display error message if there is an error */}
      {error && <div className="error_message">{error}</div>}
    </div>
  );
}
