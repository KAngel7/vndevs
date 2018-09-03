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
                <Link prefetch href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/contact">
                  <a>Contact</a>
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