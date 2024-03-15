import React from "react";

export default function AboutPage() {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <div className="main container">
          <h1 className="title">About me</h1>
          <div className="introduction">
            <h2 className="subtitle">Here is information about me. Who I am, what my skills are, what I'm passionate about and what I have to offer.</h2><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nihil officiis iste molestiae, sequi reiciendis iure corporis quo ratione modi rerum! Veritatis facilis amet facere sed rem, quia sit impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /><br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptas dolorum laboriosam, reiciendis, expedita possimus voluptatem saepe molestias animi consequatur amet deserunt modi debitis minus tempore sit, exercitationem iste culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto, fuga nam et quae magnam id, maxime reiciendis eius porro, impedit sint nulla totam vel praesentium fugit aliquam ab facere.</p>
          </div>

          <div class="skills">
  <h1 class="title">Skills</h1>

  <div class="skills_section">
    <div class="skills_column_skills">
      <div class="skills_list">
        <div class="skill_name_short">HTML</div>
        <div class="skill_name_short">CSS</div>
        <div class="skill_name_long">JavaScript</div>
        <div class="skill_name_short">SQL</div>
        <div class="skill_name_short">Git</div>
        <div class="skill_name_long">GitHub</div>
        <div class="skill_name_short">Figma</div>
        <div class="skill_name_short">Scrum</div>
        <div class="skill_name_long">WordPress</div>
      </div>
    </div>

    <div class="skills_column_text">
      <div class="skills_text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, vel corrupti aliquam culpa harum asperiores neque quam maiores. Architecto excepturi, id doloremque vitae voluptatum optio explicabo illo. Sed, placeat.<br /><br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea temporibus numquam quaerat nihil? Sint corporis possimus ipsa earum nostrum. Earum, est quidem doloremque sapiente animi maxime! Magni necessitatibus quis recusandae.</p>
      </div>
    </div>
  </div>
</div>

          <div className="experience">
            <h1 className="title">Experience</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, neque minus quos quod consequatur a quisquam sed vel assumenda aperiam dignissimos earum saepe accusantium nostrum in, totam maiores soluta enim!<br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta magni eius accusantium rem quis? Veritatis nemo natus rerum necessitatibus voluptate quisquam voluptates magnam sunt, pariatur excepturi sequi, ducimus cum?</p>
            <div className="cv_button">
              <a href="/assets/CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
