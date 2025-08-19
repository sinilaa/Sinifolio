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
          <h2 className="subtitle">Hello! I'm Sini! Software developer, IT Engineer student, customer service guru, and overall likeable human being.</h2><br />
        </div>
        <img src="/assets/sinilaamanen.jpg" alt="Sini Laamanen" className="profile_img" width="420" height="560"></img>
      </div>

        <div className="introduction_text">
        <p>I have always been fascinated by the continuous advancement of technology and its vast potential to improve the world and make life a little better. This passion and curiosity for development eventually led me, after years of trying different professions and searching for myself, to take the leap and join a team of developers to help make the world a better place.<br /><br />

        What excites me most about being a Software Developer is the opportunity to create solutions that have a real impact, solve everyday problems, and help people. Whether it's simplifying daily tasks, facilitating social interactions, or enhancing health and security, understanding customer needs is crucial. Identifying the right problems to solve, quickly delivering solutions, learning from them, and continuously improving over time is the key to great development. Whether it’s a major change or a small improvement, I approach every project with care, focusing on how I can help or inspire others through my work.<br /><br />

        Besides handling software development from start to finish, both frontend and backend, I also love using my creativity and keen eye for detail. UX/UI design, improving usability and accessibility, and ensuring quality are some of my favorite aspects of development. And of course, I’m always passionate about learning new things and improving myself further.<br /><br />

        I am deeply passionate about development, and I see it as my calling. I look forward to learning more through diverse projects and collaborating with people who share the same passion as me!</p>

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
            <p>I hold a degree in Software Development, specializing in Web Development, and I am currently studying to become an Information Technology Engineer. My studies, combined with personal interest, have strengthened my technical expertise across multiple areas, especially frontend and backend web development.<br /><br />

            <strong>Programming Languages & Technologies:</strong> HTML, CSS, JavaScript, Python, C#<br />
            <strong>Frameworks & Libraries:</strong> React, Express, Node<br />
            <strong>Databases & CMS:</strong> MongoDB, SQL, WordPress<br />
            <strong>CMS:</strong>WordPress<br />
            <strong>Version Control & Tools:</strong> Git/GitHub, Figma, Canva, Jira, Trello, Microsoft Office<br />
            <strong>Methods:</strong> Agile practices, especially Scrum<br /><br />

            My skills also include problem-solving, visual design sense, communication, and analytical thinking. Alongside my technical expertise, I bring extensive customer service experience, including roles as a manager and team leader. And no matter where I go, I always bring my outgoing and positive personality with me!
            </p>

            </div>
          </div>
        </div>
      </div>

      <div className="experience">
        <h1 className="title">Experience</h1>
        <p>- Vocational Qualification in Information and Communications Technology, Software Developer (Web Development)<br />
        - Bachelor of Engineering in Information and Communications Technology (ongoing), Oulu University of Applied Sciences<br />
        - Extensive customer service and sales experience as Store Manager, Salesperson, and Practical Nurse
        
        <br /><br />You can find more information about my work experience and education in my CV. You can open and download it by clicking the button below.</p>

        {/* CV download button */}
        <div className="cv_btn">
          <a href="/assets/CV.pdf" alt="cv" target="_blank" rel="noopener noreferrer">CV</a>
        </div> 
      </div>
    </div>
  );
}
