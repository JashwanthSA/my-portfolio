import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-heading text-center">
        <h2>about me</h2>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-about-txt">
                <h3>
                  I'm a self motivated Web Developer and a Competitive programmer. I'm currently pursuing B.E in Computer Science at Chennai Institute of Technology. I am passionate about learning new skills and technologies, and love to solve challenging problems.
                </h3>
                <p>
                  I have knowledge in HTML, CSS and JS, web frameworks like React, Angular, Node and Express and also in databases like MySQL, Postgres and Pandas. I too know many programming languages like Python, C, C++, Java and many more.
                </p>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>phone</h3>
                      <p>7395961016</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>email</h3>
                      <p>jash.chn@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
              <div className="single-about-img">
                <img src={`${process.env.PUBLIC_URL}/assets/images/about/pp.jpg`} alt="profile_image" />
                <div className="about-list-icon">
                  <ul>
                    <li>
                      <a href="https://github.com/JashwanthSA" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/jashwanth-sa-71064a253/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/_jashwanth_911/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 