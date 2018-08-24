import React from 'react';
import './style.css';

class Caption extends React.Component<{}, {}> {
  render() {
    return (
      <div className="home-caption">
        <div className="home-title">
          <h2>VNDEVS</h2>
        </div>
        <div className="home-subtitle">
          <h3>Developers from Viet Nam</h3>
        </div>
      </div>
    );
  }
}

export default Caption;