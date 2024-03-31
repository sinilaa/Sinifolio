import { Helmet } from "react-helmet";


// Functional component representing the About page
export default function AboutPage() {
  
  return (
    <div className="main container">
      <Helmet>
        <title>About me</title>
        <meta name="description" content="This page is about me and my skills" />
      </Helmet>

      <div className="introduction">
        <div className="introduction_quote">
          <h1 className="title">About me</h1>
          <h2 className="subtitle">Here is information about me. 
          Who I am, what my skills are, what I'm passionate about and what I have to offer.</h2><br />
        </div>
        <img src="/assets/sinilaamanen.jpg" alt="Sini Laamanen" className="profile_img" width="420" height="560"></img>
      </div>

        <div className="introduction_text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Tempora, nihil officiis iste molestiae, 
          sequi reiciendis iure corporis quo ratione modi rerum! 
          Veritatis facilis amet facere sed rem, quia sit impedit. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /><br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Dolorem voluptas dolorum laboriosam, 
          reiciendis, expedita possimus voluptatem saepe molestias animi consequatur amet 
          deserunt modi debitis minus tempore sit, exercitationem iste culpa. 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          A architecto, fuga nam et quae magnam id, maxime reiciendis eius porro, 
          impedit sint nulla totam vel praesentium fugit aliquam ab facere.</p>
      </div>

      <div className="skills">
      <h1 className="title">Skills</h1>
        <div className="skills_section">
          <div className="skills_column_skills">
            <div className="skills_list">
              <div class="skill_name">HTML</div>
              <div class="skill_name">CSS</div>
              <div class="skill_name">JavaScript</div>
              <div class="skill_name">WordPress</div>
              <div class="skill_name">SQL</div>
              <div class="skill_name">MongoDb</div>
              <div class="skill_name">Figma</div>
              <div class="skill_name">Git</div>
              <div class="skill_name">GitHub</div>
            </div>
          </div>

          <div className="skills_column_text">
            <div className="skills_text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Molestiae cumque, vel corrupti aliquam culpa harum asperiores neque quam maiores. 
              Architecto excepturi, id doloremque vitae voluptatum optio explicabo illo. 
              Sed, placeat.<br /><br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Ea temporibus numquam quaerat nihil? Sint corporis possimus ipsa earum nostrum. 
              Earum, est quidem doloremque sapiente animi maxime! 
              Magni necessitatibus quis recusandae.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="experience">
        <h1 className="title">Experience</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Natus, neque minus quos quod consequatur a quisquam sed vel 
        assumenda aperiam dignissimos earum saepe accusantium nostrum in, 
        totam maiores soluta enim!<br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Optio dicta magni eius accusantium rem quis? 
        Veritatis nemo natus rerum necessitatibus voluptate quisquam 
        voluptates magnam sunt, pariatur excepturi sequi, ducimus cum?</p>

        {/* CV download button */}
        <div className="cv_btn">
          <a href="/assets/CV.pdf" alt="cv" target="_blank" rel="noopener noreferrer">CV</a>
        </div> 
      </div>
    </div>
  );
}
