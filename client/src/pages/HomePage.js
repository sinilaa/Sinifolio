import { Helmet } from "react-helmet";

// Functional component representing the Home page
export default function HomePage() {
  
  return (
        <div className="main container">
          <Helmet>
            <title>Homepage</title>
            <meta name="description" content="This page is homepage" />
          </Helmet>
          
        <div className="main_title">
          <h1>
            Hey there!<br />
            I'm <span className="title_name">Sini Laamanen,</span><br />
            Web Developer
          </h1>

          <h2>
            Passionate about front-end development,<br />
            UX/UI design and learning new stuff.<br /><br />
            PS. Please note that this portfolio is still in the process,<br /> 
            so it's not even nearly perfect and some information is still missing.<br />
          </h2>
        </div>
      </div>
  );
}
