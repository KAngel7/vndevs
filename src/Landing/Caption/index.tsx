import React from 'react';
import './style.css';

class Caption extends React.Component<{}, {}> {
  render() {
    return (
      <div className="home-caption">
        <div className="caption-section caption-intro">
          <h1 className="home-title">VNDEVS</h1>
          <h3 className="home-subtitle">Developers from Viet Nam</h3>
        </div>
        <div className="caption-intro-2">
          <div className="home-headline-section">
            <p className="home-headline">
              We are developers from VietNam. We help you invent what's next, and bring it to life with technology.
            </p>
            <p>
              <span className="tech-image" />
            </p>
          </div>
          <footer className="footer-area section-gap">
            <div className="app-container">
              <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-6">
                  <div className="single-footer-widget">
                    <h6>About Us</h6>
                    <p>Contact: contact@vndevs.com</p>
                    <p>Address: Hồ Chí Minh city 700000, Viet Nam</p>
                    <p className="footer-text">2018 All rights reserved</p>
                  </div>
                </div>
                <div className="col-lg-5  col-md-6 col-sm-6">
                  <div className="single-footer-widget">
                    <h6>Newsletter</h6>
                    <p>Stay update with our latest</p>
                    <div className="" id="mc_embed_signup">
                      <form target="_blank" action="" method="get" className="form-inline" noValidate>
                        <input type="email" className="form-control" name="EMAIL" placeholder="Enter Email" required />
                        <button className="send-btn btn btn-default">
                          Send
                        </button>
                        <div className="info">
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
                  <div className="single-footer-widget">
                    <h6>Follow Us</h6>
                    <p>Let us be social</p>
                    <p>
                      <a href="https://www.facebook.com/VietNamDevs/" target="_blank" title="Facebook page">
                        Facebook
                      </a>
                    </p>
                    <p>
                      <a href="https://www.linkedin.com/company/vndevs/" target="_blank" title="Facebook page">
                        LinkedIn
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Caption;