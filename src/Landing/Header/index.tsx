import React from 'react';
import './style.css';
import Link from 'next/link';

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <header className="header">
        <div className="app-container">
          <nav className="nav-menu">
            <ul>
              <li>
                <Link href="/">
                  <a title="Home">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a title="About">About</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a title="Contact">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;