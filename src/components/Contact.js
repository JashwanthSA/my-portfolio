import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-heading text-center">
        <h2>contact me</h2>
      </div>
      <div className="container">
        <div className="contact-content">
          <div className="row">
            <div className="single-contact-box">
              <div className="contact-adress">
                <div className="contact-add-head">
                  <h3>Jashwanth SA</h3>
                  <p>web developer and ui/ux designer</p>
                </div>
                <div className="contact-add-info">
                  <div className="single-contact-add-info">
                    <h3>phone</h3>
                    <p>7395961016</p>
                  </div>
                  <div className="single-contact-add-info">
                    <h3>email</h3>
                    <p>jash.chn@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="hm-foot-icon">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/jashwanth-sa-71064a253/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/_jashwanth_911/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/JashwanthSA" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 