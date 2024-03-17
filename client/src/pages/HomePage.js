import React from "react";

// Functional component representing the Home page
export default function HomePage() {
  
  return (
    <main className="main_content">
      <div className="content_wrapper">
        <div className="main container">
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
      </div>
    </main>
  );
}
