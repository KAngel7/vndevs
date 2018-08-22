import React from 'react';
import './style.css';

class Caption extends React.Component<{}, {}> {
  render() {
    return (
      <div className="homeCaption">
        <div className="homeTitle">
          <span>VNDEVS</span>
        </div>
        <div className="homeSubtitle">
          <span>Best Viet Nam outsourcing company</span>
        </div>
      </div>
    );
  }
}

export default Caption;