import React, { RefObject } from 'react';
import './style.css';

const CAPTION_WEIGHT = 3400;
const FPS = 120;
const SLOW = 0.1;

class Caption extends React.Component<{}, {}> {
  lastTime: number;
  a = 0;
  v = 0;
  captionRef: RefObject<HTMLDivElement> = React.createRef();
  isMove = false;
  translate = 0;
  lastWheel = new Date().getTime();;
  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel);
    this.startAnimate();
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
    this.stopAnimate();
  }
  handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    this.a = e.deltaY / CAPTION_WEIGHT;
    this.lastWheel = new Date().getTime();
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
        this.draw(deltaTime);
        this.lastTime = time;
      }
      if(this.isMove) {
        this.moveLoop();
      }
    });
  }
  draw = (deltaTime: number) => {
    this.v += this.a * deltaTime;
    const direction = this.v > 0 ? 1 : -1;
    this.v = (Math.abs(this.v) - Math.abs(this.v) * SLOW);
    if (this.v < 0) this.v = 0;
    this.v *= direction;
    this.translate -= this.v * deltaTime;
    this.captionRef.current.style.transform = `translate(0, ${this,this.translate}px)`;
    if (new Date().getTime() - this.lastWheel > deltaTime) {
      this.a = 0;
    }
  }
  render() {
    return (
      <div className="home-caption" ref={this.captionRef}>
        <div className="caption-section caption-intro">
          <h1 className="home-title">VNDEVS</h1>
          <h3 className="home-subtitle">Developers from Viet Nam</h3>
        </div>
        <div className="caption-section caption-intro-2">
          <h1 className="home-title">VNDEVS</h1>
          <h3 className="home-subtitle">Developers from Viet Nam</h3>
        </div>
      </div>
    );
  }
}

export default Caption;