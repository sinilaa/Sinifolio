import Project from "../components/Project";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

// Component for displaying a list of projects
export default function ProjectsPage() {
  // State to hold the list of projects
  const [projects, setProjects] = useState([]);

  // Fetch projects data on component mount
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/project`)
      .then(response => {
        response.json().then(projects => {
          setProjects(projects); // Update projects state with fetched data
        });
      });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  // Render the list of projects
  return (
    <>
      <div className="main container">
        <Helmet>
          <title>Projects page</title>
          <meta name="description" content="This page present all projects" />
        </Helmet>

      <h1 className="title">Projects</h1>
      {/* Render each project using the Project component */}
      {projects.length > 0 && projects.map(project => (
        <Project key={project.id} {...project} />
      ))}
      </div>
    </>
  );
}
