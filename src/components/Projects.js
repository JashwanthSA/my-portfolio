import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Real time collaboration webapp using OPAL",
      image: `${process.env.PUBLIC_URL}/assets/images/projects/online-collaboration-tools-.jpg`,
      link: "https://github.com/JashwanthSA/real-time-collab-webapp-using-OPAL",
      span: "single"
    },
    {
      title: "Emotion Recognition from Speech",
      image: `${process.env.PUBLIC_URL}/assets/images/projects/emotion.webp`,
      link: "https://github.com/JashwanthSA/Emotion-Recognition-from-Speech",
      span: "single"
    },
    {
      title: "Handwritten Character Recognition",
      image: `${process.env.PUBLIC_URL}/assets/images/projects/handwritten_cropped.JPG`,
      link: "https://github.com/JashwanthSA/Handwritten-Character-Recognition",
      span: "single"
    },
    {
      title: "Fake News Detection App",
      image: `${process.env.PUBLIC_URL}/assets/images/projects/fake news.webp`,
      link: "https://github.com/JashwanthSA/Fake-News-Detection-App-using-ML",
      span: "single"
    },
    {
      title: "Advanced Sentiment Analysis System for Reddit",
      image: `${process.env.PUBLIC_URL}/assets/images/projects/bitcoin-3132574_640.jpg`,
      link: "https://github.com/JashwanthSA/Sentiment-Analysis-KYNHACK",
      span: "single"
    }
  ];

  return (
    <section id="projects" className="portfolio">
      <div className="portfolio-details">
        <div className="section-heading text-center">
          <h2>projects</h2>
        </div>
        <div className="container">
          <div className="portfolio-content">
            <div className="isotope">
              <div className="row">
                <div className="col-sm-4">
                  <a href={projects[0].link} target="_blank" rel="noopener noreferrer" className="item">
                    <img src={projects[0].image} alt="portfolio image" />
                    <div className="isotope-overlay">
                      <span>{projects[0].title}</span>
                    </div>
                  </a>
                  <a href={projects[1].link} target="_blank" rel="noopener noreferrer" className="item">
                    <img src={projects[1].image} alt="portfolio image" />
                    <div className="isotope-overlay">
                      <span>{projects[1].title}</span>
                    </div>
                  </a>
                </div>

                <div className="col-sm-4">
                  <a href={projects[2].link} target="_blank" rel="noopener noreferrer" className="item">
                    <img src={projects[2].image} alt="portfolio image" />
                    <div className="isotope-overlay">
                      <span>{projects[2].title}</span>
                    </div>
                  </a>
                </div>

                <div className="col-sm-4">
                  <a href={projects[3].link} target="_blank" rel="noopener noreferrer" className="item">
                    <img src={projects[3].image} alt="portfolio image" />
                    <div className="isotope-overlay">
                      <span>{projects[3].title}</span>
                    </div>
                  </a>
                  <a href={projects[4].link} target="_blank" rel="noopener noreferrer" className="item">
                    <img src={projects[4].image} alt="portfolio image" />
                    <div className="isotope-overlay">
                      <span>{projects[4].title}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 