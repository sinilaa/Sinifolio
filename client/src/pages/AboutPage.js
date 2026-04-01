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
          <h2 className="subtitle">Hi! I'm Sini! Software developer, IT Engineer student, customer service guru, and overall likeable human being.</h2><br />
        </div>
        <img src="/assets/sinilaamanen.jpg" alt="Sini Laamanen" className="profile_img" width="420" height="560"></img>
      </div>

        <div className="introduction_text">
        <p>I have always been fascinated by the continuous advancement of technology and its vast potential to improve the world and make life a little better. This passion and curiosity for development eventually led me, after years of trying different professions and searching for myself, to take the leap and join a team of developers to help make the world a better place.<br /><br />

        What excites me most about being a Software Developer is the opportunity to create solutions that make a real impact, solve everyday problems, and help people. Whether it’s simplifying daily tasks, facilitating social interactions, or enhancing health and security, every contribution matters. Big or small, I approach every project with care, always focusing on how I can help and inspire others through my work.<br /><br />

        Besides handling software development from start to finish, both frontend and backend, I also love using my creativity and keen eye for detail. UX/UI design, improving usability and accessibility, and ensuring quality are some of my favorite aspects of development. And of course, I’m always passionate about learning new things and improving myself further.<br /><br />

        I am deeply passionate about what I do, and I look forward to learning more through diverse projects and collaborating with people who share the same passion as me!</p>

      </div>

      <div className="skills">
      <h1 className="title">Skills</h1>
        <div className="skills_section">
          <div className="skills_column_skills">
            <div className="skills_list">
              <div class="skill_name">HTML</div>
              <div class="skill_name">CSS</div>
              <div class="skill_name">JavaScript</div>
              <div class="skill_name">React</div>
              <div class="skill_name">C/C++</div>
              <div class="skill_name">Python</div>
              <div class="skill_name">Node</div>
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
            <p>
            I have acquired basic knowledge of various languages and technologies through studies and self-learning. On top of that, I bring a good eye for visual design, strong communication skills, and experience leading and managing people — all with a great and sunny personality! <br /><br />
            <strong>Programming Languages:</strong> HTML, CSS, JavaScript, Python, C/C++<br />
            <strong>Frameworks & Libraries:</strong> React, Express, Node<br />
            <strong>Databases:</strong> MongoDB and SQL<br />
            <strong>CMS:</strong> WordPress<br />
            <strong>Version Control & Tools:</strong> Git/GitHub, Figma, Canva, Jira, Trello, Microsoft Office<br />
            <strong>Methods:</strong> Agile practices, especially Scrum
            </p>

            </div>
          </div>
        </div>
      </div>

      <div className="experience">
        <h1 className="title">Experience</h1>
        <p>- <strong>Software Developer (Web Development)</strong>, Taitotalo, Helsinki<br />
        - <strong>Bachelor of Engineering in Information and Communications Technology</strong> (ongoing),<br />
        Oulu University of Applied Sciences<br />
        - Extensive experience in <strong>customer service</strong>, <strong>sales</strong> and <strong>leadership</strong> as a Store Manager and Salesperson<br />
        - Experience in <strong>Health</strong> and<strong> well-being</strong> as a Practical Nurse
        
        <br /><br />You can find more information about my work experience and education in my CV. You can open and download it by clicking the button below.</p>

        {/* CV download button */}
        <div className="cv_btn">
          <a href="/assets/CV.pdf" alt="cv" target="_blank" rel="noopener noreferrer">CV</a>
        </div> 
      </div>
    </div>
  );
}
