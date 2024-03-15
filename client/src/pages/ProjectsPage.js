import Project from "../components/Project";
import { useEffect, useState } from "react";

// Component for displaying a list of projects
export default function ProjectsPage() {
  // State to hold the list of projects
  const [projects, setProjects] = useState([]);

  // Fetch projects data on component mount
  useEffect(() => {
    fetch('http://localhost:4000/project')
      .then(response => {
        response.json().then(projects => {
          setProjects(projects); // Update projects state with fetched data
        });
      });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  // Render the list of projects
  return (
    <>
      <main className="main-content">
        <div className="content-wrapper">
          <div className="main container">
            <h1 className="title">Projects</h1>
            {projects.length > 0 && projects.map(project => (
              <Project key={project.id} {...project} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
