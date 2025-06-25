import React from 'react';

const Hero = () => {
  return (
    <section id="welcome-hero" className="welcome-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="header-text">
              <h2>
                hi <span>,</span> i am <br /> Jashwanth <span>.</span>
              </h2>
              <p>web developer and ui/ux designer</p>
              <a href={`${process.env.PUBLIC_URL}/assets/download/jash_resumae.pdf`} target="_blank" rel="noopener noreferrer" style={{marginRight: '20px'}}>
                download resume
              </a>
              <a href="https://linktr.ee/JashwanthSA" target="_blank" rel="noopener noreferrer">
                coding profiles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 