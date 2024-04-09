import {Link} from "react-router-dom";

// Functional component to display project details
export default function Project({_id,title,summary,cover}) {

  // Render project with image, title, and summary
  return (
    <div className="project">
      <div className="image">
        <Link to={`/project/${_id}`}>
          <img src={`${process.env.REACT_APP_API_URL}/api/${cover}`} alt=""/>
        </Link>
      </div>

      <div className="texts">
        <Link to={`/project/${_id}`}>
          <h2 className="subtitle">{title}</h2>
        </Link>
          <p className="summary">{summary}</p>
      </div>
    </div>
  );
}