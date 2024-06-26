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
            UX/UI design and learning new stuff.
          </h2>
        </div>
      </div>
  );
}
