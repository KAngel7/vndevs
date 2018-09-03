import React from 'react';
import Particles from 'react-particles-js';
import './style.css';
import Header from './Header';
import Caption from './Caption';

class Landing extends React.Component<{}, {}> {

  render() {
    return (
      <div className="landing">
        <Header />
        <div className="section-caption">
          <Particles
            params={require('./particles-config.json')}
            className="landing-particles"
          />
          <Caption />
        </div>
      </div>
    );
  }
}

export default Landing;