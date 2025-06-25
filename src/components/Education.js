import React from 'react';

const Education = () => {
  const educationData = [
    {
      period: "2022 - 2026",
      degree: "Bachelor in computer science",
      institution: "Chennai Institute of Technology",
      location: "Chennai, TamilNadu",
      grade: "CGPA: 8.6"
    },
    {
      period: "Apr 2022",
      degree: "12th Board",
      institution: "DAV Boys Sr. Sec. School",
      location: "Mugappair, Chennai, TamilNadu",
      grade: "Percentage: 91.4%"
    },
    {
      period: "Mar 2020",
      degree: "10th Board",
      institution: "DAV Matric Hr. Sec. School",
      location: "Mugappair, Chennai, TamilNadu",
      grade: "Percentage: 89.6%"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="section-heading text-center">
        <h2>education</h2>
      </div>
      <div className="container">
        <div className="education-horizontal-timeline">
          <div className="row">
            {educationData.map((edu, index) => (
              <div key={index} className="col-sm-4">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>{edu.period}</h2>
                    <h3>{edu.degree}</h3>
                  </div>
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className={`single-timeline-horizontal ${index === educationData.length - 1 ? 'spacial-horizontal-line' : ''}`}></span>
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">{edu.institution}</h4>
                      <h5>{edu.location}</h5>
                      <p className="description">{edu.grade}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 