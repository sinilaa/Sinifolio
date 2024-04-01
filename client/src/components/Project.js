import {Link} from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

// Functional component to display project details
export default function Project({_id,title,summary,cover}) {

  // Render project with image, title, and summary
  return (
    <div className="project">
      <div className="image">
        <Link to={`/project/${_id}`}>
          {/* Käytä uutta API-tietoa kutsuissa */}
          <img src={`${API_URL}/${cover}`} alt=""/>
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