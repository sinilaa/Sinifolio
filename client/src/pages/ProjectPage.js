import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { UserContext } from "../contexts/UserContext";

// Component for displaying project details
export default function ProjectPage() {
  const [projectInfo, setProjectInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch project information on component mount or when project ID changes
  useEffect(() => {
    fetchProjectInfo(); // Call function to fetch project information
  }, [id]);

  // Function to fetch project information
  async function fetchProjectInfo() {
    try {
      const response = await fetch(`${import.meta.env.REACT_APP_API_URL}/api/project/${id}`);
      if (!response.ok) {
        throw new Error('Error fetching project information');
      }
      const projectData = await response.json();
      setProjectInfo(projectData);
    } catch (error) {
      console.error(error);
    }
  }

  // Function to handle project deletion
  async function handleDelete() {
    try {
      const response = await fetch(`${import.meta.env.REACT_APP_API_URL}/api/project/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (response.ok) {
        // Project deletion successful, navigate back to projects page
        navigate('/projects');
      } else {
        console.error('Project deletion failed');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  }

  // If project information is not loaded yet, return empty string
  if (!projectInfo) return '';

  // Render project details
  return (
    <div className="main container">
      <Helmet>
        <title>Project page</title>
        <meta name="description" content="This page present project information" />
      </Helmet>

    <div className="project_page">
      {/* Edit and delete buttons for authorized user only */}
      {userInfo.id === projectInfo.author._id && (
        <div className="edit_row">
          <Link className="edit_btn" to={`/edit/${projectInfo._id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6">
            <path strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M16.862 4.487l1.687-1.688a1.875 
              1.875 0 112.652 2.652L10.582 16.07a4.5 
              4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 
              4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 
              7.125M18 14v4.75A2.25 2.25 0 0115.75 
              21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 
              2.25 0 015.25 6H10" />
            </svg>
            Edit
          </Link>

          <button className="delete_btn" onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-6 h-6">
            <path strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m14.74 9-.346 9m-4.788 0L9.26 
              9m9.968-3.21c.342.052.682.107 
              1.022.166m-1.022-.165L18.16 
              19.673a2.25 2.25 0 0 1-2.244 
              2.077H8.084a2.25 2.25 0 0 
              1-2.244-2.077L4.772 5.79m14.456 
              0a48.108 48.108 0 0 0-3.478-.397m-12 
              .562c.34-.059.68-.114 1.022-.165m0 
              0a48.11 48.11 0 0 1 3.478-.397m7.5 
              0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 
              51.964 0 0 0-3.32 0c-1.18.037-2.09 
              1.022-2.09 2.201v.916m7.5 0a48.667 
              48.667 0 0 0-7.5 0" />
            </svg>
            Delete
          </button>
        </div>
      )}

      {/* Display project title and content */}
      <h1 className="title">{projectInfo.title}</h1>
      <div className="content" dangerouslySetInnerHTML={{ __html: projectInfo.content }} />
    </div>
  </div>
  );
}
