import React from 'react';
import Particles from 'react-particles-js';
import './style.css';
import MenuBar from './MenuBar';
import Caption from './Caption';

class Header extends React.Component<{}, {}> {

  render() {
    return (
      <div className="header">
        <Particles
          params={require('./particles-config.json')}
          className="header-particles"
        />
        <div className="menuBarWrapper"> 
          <MenuBar />
        </div>
        <Caption />
      </div>
    );
  }
}

export default Header;