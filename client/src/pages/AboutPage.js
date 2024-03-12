import React from "react";

export default function AboutPage() {
  return (
    <main className="main">
      <div className="section">
        <div className="content container">
          <h1 className="title">About me</h1><br /><br />
          
          <div className="introduction">
            <h2 className="subtitle">Here is information about me. Who I am, what I’m passionate about, etc.</h2><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nihil officiis iste molestiae, sequi reiciendis iure corporis quo ratione modi rerum! Veritatis facilis amet facere sed rem, quia sit impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /><br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptas dolorum laboriosam, reiciendis, expedita possimus voluptatem saepe molestias animi consequatur amet deserunt modi debitis minus tempore sit, exercitationem iste culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto, fuga nam et quae magnam id, maxime reiciendis eius porro, impedit sint nulla totam vel praesentium fugit aliquam ab facere.</p>
          </div>

          <div className="skills">
            <h1 className="title">Skills</h1><br /><br />
            <div className="skill_list">
              <div className="skill">
                <div className="skill_name_short">HTML</div>
              </div>
              <div className="skill">
                <div className="skill_name_short">CSS</div>
              </div>
              <div className="skill">
                <div className="skill_name_long">JavaScript</div>
              </div>
              <div className="skill">
                <div className="skill_name_short">SQL</div>
              </div>
              <div className="skill">
                <div className="skill_name_short">Git</div>
              </div>
              <div className="skill">
                <div className="skill_name_long">GitHub</div>
              </div>
              <div className="skill">
                <div className="skill_name_short">Figma</div>
              </div>
              <div className="skill">
                <div className="skill_name_short">Scrum</div>
              </div>
              <div className="skill">
                <div className="skill_name_long">WordPress</div>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, vel corrupti aliquam culpa harum asperiores neque quam maiores. Architecto excepturi, id doloremque vitae voluptatum optio explicabo illo. Sed, placeat.<br /><br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea temporibus numquam quaerat nihil? Sint corporis possimus ipsa earum nostrum. Earum, est quidem doloremque sapiente animi maxime! Magni necessitatibus quis recusandae.</p>
          </div>

          <div className="experience">
            <h1 className="title">Experience</h1><br /><br />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, neque minus quos quod consequatur a quisquam sed vel assumenda aperiam dignissimos earum saepe accusantium nostrum in, totam maiores soluta enim!<br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta magni eius accusantium rem quis? Veritatis nemo natus rerum necessitatibus voluptate quisquam voluptates magnam sunt, pariatur excepturi sequi, ducimus cum?</p>
            <div className="cv_button">
              <a href="/pdf/CV.pdf" target="_blank">CV</a>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
