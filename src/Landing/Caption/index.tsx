import React, { RefObject } from 'react';
import './style.css';

const CAPTION_WEIGHT = 3400;
const FPS = 120;
const SLOW = 0.08;
const MAX_A = 0.015;
const MIN_V = 0.0001;

class Caption extends React.Component<{}, {}> {
  lastTime: number;
  a = 0;
  v = 0;
  captionRef: RefObject<HTMLDivElement> = React.createRef();
  heightRef: RefObject<HTMLDivElement> = React.createRef();
  isMove = false;
  translate = 0;
  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel, { passive: false });
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
    this.stopAnimate();
  }
  handleWheel = (e: WheelEvent) => {
    this.startAnimate();
    e.preventDefault();
    this.a = e.deltaY / CAPTION_WEIGHT;
    if (this.a > MAX_A) this.a = MAX_A;
    if (this.a < -MAX_A) this.a = -MAX_A;
    return false;
  };
  startAnimate = () => {
    this.isMove = true;
    this.moveLoop();
  }
  stopAnimate = () => {
    this.isMove = false;
  }
  moveLoop = () => {
    requestAnimationFrame((time) => {
      if (!this.lastTime) this.lastTime = time;
      const deltaTime = time - this.lastTime;
      if (deltaTime > (1000 / FPS)) {
        if (this.a || this.v) this.draw(deltaTime);
        this.a = 0;
        this.lastTime = time;
      }
      if (this.isMove) {
        this.moveLoop();
      }
    });
  }
  draw = (deltaTime: number) => {
    this.v += this.a * deltaTime;
    this.v *= (1 - SLOW);
    if (Math.abs(this.v) < MIN_V) {
      this.v = 0;
      this.stopAnimate();
    };
    this.translate -= this.v * deltaTime;
    if (this.translate > 0) this.translate = 0;
    if (this.translate < -this.heightRef.current.clientHeight) 
      this.translate = -this.heightRef.current.clientHeight;
    this.captionRef.current.style.transform = `translate(0, ${this.translate}px)`;
  }
  render() {
    return (
      <div className="home-caption" ref={this.captionRef}>
        <div className="caption-section caption-intro">
          <h1 className="home-title">VNDEVS</h1>
          <h3 className="home-subtitle">Developers from Viet Nam</h3>
        </div>
        <div className="caption-intro-2" ref={this.heightRef}>
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
                    <p>Address: Tân Bình Dicstrict, Hồ Chí Minh city 700000</p>
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