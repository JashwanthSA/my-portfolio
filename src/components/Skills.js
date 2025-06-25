import React, { useEffect } from 'react';

const Skills = () => {

  const frontendSkills = [
    { name: 'HTML', image: `${process.env.PUBLIC_URL}/assets/images/skills/html.png` },
    { name: 'CSS', image: `${process.env.PUBLIC_URL}/assets/images/skills/css1.png` },
    { name: 'JavaScript', image: `${process.env.PUBLIC_URL}/assets/images/skills/js.jpg` },
    { name: 'Tailwind', image: `${process.env.PUBLIC_URL}/assets/images/skills/tailwind.png` },
    { name: 'React', image: `${process.env.PUBLIC_URL}/assets/images/skills/react.png` },
    { name: 'Angular', image: `${process.env.PUBLIC_URL}/assets/images/skills/angular.png` },
    { name: 'Next.js', image: `${process.env.PUBLIC_URL}/assets/images/skills/nextjs.png` }
  ];

  const backendSkills = [
    { name: 'Node.js', image: `${process.env.PUBLIC_URL}/assets/images/skills/nodejs.png` },
    { name: 'Express.js', image: `${process.env.PUBLIC_URL}/assets/images/skills/expressjs.png` },
    { name: 'Django', image: `${process.env.PUBLIC_URL}/assets/images/skills/django.png` },
    { name: 'MongoDB', image: `${process.env.PUBLIC_URL}/assets/images/skills/mongodb.gif` },
    { name: 'MySQL', image: `${process.env.PUBLIC_URL}/assets/images/skills/mysql.png` },
    { name: 'PostgreSQL', image: `${process.env.PUBLIC_URL}/assets/images/skills/pgsql.jpeg` }
  ];

  const otherSkills = [
    { name: 'Python', image: `${process.env.PUBLIC_URL}/assets/images/skills/python.png` },
    { name: 'Java', image: `${process.env.PUBLIC_URL}/assets/images/skills/java.png` },
    { name: 'C++', image: `${process.env.PUBLIC_URL}/assets/images/skills/cpp.jpeg` },
    { name: 'Git', image: `${process.env.PUBLIC_URL}/assets/images/skills/git.png` },
    { name: 'Kali Linux', image: `${process.env.PUBLIC_URL}/assets/images/skills/kali.png` },
    { name: 'Ubuntu', image: `${process.env.PUBLIC_URL}/assets/images/skills/ubuntu.png` },
    { name: 'Cisco', image: `${process.env.PUBLIC_URL}/assets/images/skills/ciscopt.png` },
    { name: 'Figma', image: `${process.env.PUBLIC_URL}/assets/images/skills/figma.png` }
  ];

  useEffect(() => {
    // Owl Carousel initialization is handled by custom.js
    // This ensures no conflicts between React and jQuery
  }, []);

  const SkillItem = ({ skill }) => (
    <div className="item">
      <a style={{ pointerEvents: 'none', cursor: 'default' }} href="#">
        <img src={skill.image} alt={skill.name} />
      </a>
    </div>
  );

  return (
    <section id="skills" className="clients">
      <div className="section-heading text-center">
        <h2>Skills</h2><br />
      </div>
      <div className="clients-area">
        <div className="container" id="frontend">
          <h3 className="skills-heading">Frontend</h3><br />
          <div className="owl-carousel owl-theme" id="frontend-skills">
            {frontendSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>

        <br />
        <div className="container" id="backend">
          <h3 className="skills-heading">Backend</h3><br />
          <div className="owl-carousel owl-theme" id="backend-skills">
            {backendSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>

        <br />
        <div className="container" id="others">
          <h3 className="skills-heading">Others</h3><br />
          <div className="owl-carousel owl-theme" id="other-skills">
            {otherSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;