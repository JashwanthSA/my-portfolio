import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      period: "June 2024 - July 2024",
      position: "Open Source Contributor",
      company: "SSOC Season 3",
      location: "Virtual",
      description: "Made contributions to projects and competed in various creator quests on Quira (formerly Quine) as part of the program.",
      alignment: "left"
    },
    {
      period: "Nov 2023 - Dec 2023",
      position: "Full Stack Developer Intern",
      company: "Arwin Networks",
      location: "Chennai, TamilNadu",
      description: "Assisted in creating a freelance hiring website (stuwoork.com) for the startup company. Implemented subscription functionality and payment gateway for the website using stripe. Enhanced frontend performance by implementing Tailwind CSS, resulting in a 25% reduction in CSS file size and improved rendering speed.",
      alignment: "right"
    },
    {
      period: "July 2023 - Sep 2023",
      position: "Cybersecurity Intern",
      company: "Cisco Networking Academy",
      location: "Virtual",
      description: "Configured switches and end devices to provide access to local and remote network resources. Created network topology structures for different network systems. Troubleshooted connectivity in a small scale network.",
      alignment: "left"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-heading text-center">
        <h2>experience</h2>
      </div>
      <div className="container">
        <div className="experience-content">
          <div className="main-timeline">
            <ul>
              {experienceData.map((exp, index) => (
                <li key={index}>
                  <div className="single-timeline-box fix">
                    <div className="row">
                      {exp.alignment === "left" ? (
                        <>
                          <div className="col-md-5">
                            <div className="experience-time text-right">
                              <h2>{exp.period}</h2>
                              <h3>{exp.position}</h3>
                            </div>
                          </div>
                          <div className="col-md-offset-1 col-md-5">
                            <div className="timeline">
                              <div className="timeline-content">
                                <h4 className="title">
                                  <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                  {exp.company}
                                </h4>
                                <h5>{exp.location}</h5>
                                <p className="description">{exp.description}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-md-offset-1 col-md-5 experience-time-responsive">
                            <div className="experience-time">
                              <h2>
                                <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                {exp.period}
                              </h2>
                              <h3>{exp.position}</h3>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="timeline">
                              <div className="timeline-content text-right">
                                <h4 className="title">{exp.company}</h4>
                                <h5>{exp.location}</h5>
                                <p className="description">{exp.description}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-offset-1 col-md-5 experience-time-main">
                            <div className="experience-time">
                              <h2>
                                <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                {exp.period}
                              </h2>
                              <h3>{exp.position}</h3>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 