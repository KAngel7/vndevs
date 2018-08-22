import React from 'react';
import './style.css';
import Header from './Header';

class Landing extends React.Component<{}, {}> {
  render() {
    return (
      <div className="landing">
        <Header />
      </div>
    );
  }
}

export default Landing;