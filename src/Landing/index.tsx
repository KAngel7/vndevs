/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./style.css";

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div>
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img alt="x" src="/android-chrome-192x192.png" height="80" />
            </a>
            <a
              className={`navbar-burger${activeMenu ? " is-active" : ""}`}
              role="button"
              aria-label="menu"
              aria-expanded="false"
              data-target="#navMenu"
              onClick={() => setActiveMenu(!activeMenu)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div
            className={`navbar-menu${activeMenu ? " is-active" : ""}`}
            id="navMenu"
          >
            <div className="navbar-start"></div>
            <div className="navbar-end">
              <div className="navbar-item">
                <a
                  className="button is-primary is-outlined is-rounded"
                  href="/contact"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="hero is-white has-text-centered">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                  VNDEVS
                </h1>
                <h2 className="subtitle is-size-4-desktop">
                  PM - Designer - Software engineer - QA - Devops{" "}
                  <span style={{ fontWeight: 500 }}>freelancers</span>
                </h2>
                <img alt="x" className="avatar" src="img/hero.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-medium is-primary has-text-centered is-long">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
                Hi there! Nice to meet you.
              </h1>
              <h2 className="subtitle is-size-5-desktop">
                Since beginning our journey as a freelance team nearly 3 years
                ago. We are now become a company #vndevs. We&apos;ve done many
                projects, remote work for agencies, consulted for startups, and
                collaborated with talented people to create digital products for
                both business and consumer use. We&apos;re confident to do
                everything you need with our knowledge.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section skills has-text-centered">
        <div className="container is-narrow">
          <div className="box">
            <div className="content">
              <div className="columns is-centered">
                <div className="column">
                  <figure className="image">
                    <img
                      alt="x"
                      className="is-skill-icon"
                      src="img/icons/designer.svg"
                    />
                  </figure>
                  <h1 className="title is-size-4 is-spaced">Designing</h1>
                  <p>
                    We value simple content structure, clean design patterns,
                    and thoughtful interactions.
                  </p>
                  <p className="list-title has-text-primary has-text-weight-normal">
                    Things we design:
                  </p>
                  <p>UX, UI, Web, Mobile, Apps, Logos</p>
                  <p className="list-title has-text-primary has-text-weight-normal">
                    Design Tools:
                  </p>
                  <ul>
                    <li>Balsamiq Mockups</li>
                    <li>Figma</li>
                    <li>Invision</li>
                    <li>Marvel</li>
                    <li>Pen &amp; Paper</li>
                    <li>Sketch</li>
                    <li>Webflow</li>
                    <li>Zeplin</li>
                  </ul>
                </div>
                <div className="column">
                  <figure className="image">
                    <img
                      alt="x"
                      className="is-skill-icon"
                      src="img/icons/frontend.svg"
                    />
                  </figure>
                  <h1 className="title is-size-4 is-spaced">Developing</h1>
                  <p>
                    We&apos;re able to code things from scratch, and enjoy
                    bringing ideas to life with code.
                  </p>
                  <p className="list-title has-text-primary has-text-weight-normal">
                    Languages we use:
                  </p>
                  <p>Java, Javascript, NodeJS, React native</p>
                  <p className="list-title has-text-primary has-text-weight-normal">
                    Dev Tools:
                  </p>
                  <ul>
                    <li>Eclipse</li>
                    <li>VSCode</li>
                    <li>Atom</li>
                    <li>Codekit</li>
                    <li>Codepen</li>
                    <li>Xcode</li>
                    <li>Android Studio</li>
                    <li>Terminal</li>
                  </ul>
                </div>
                <div className="column">
                  <figure className="image">
                    <img
                      alt="x"
                      className="is-skill-icon"
                      src="img/icons/mentor.svg"
                    />
                  </figure>
                  <h1 className="title is-size-4 is-spaced">Collaborating</h1>
                  <p>
                    We work together, and use tools to improve our performance,
                    quality - keep project on the line.
                  </p>
                  <p className="list-title has-text-primary has-text-weight-normal">
                    What we get:
                  </p>
                  <p>Manage work, bug tracking, automate process</p>
                  <p className="list-title has-text-primary has-text-weight-normal">
                    Manage tools:
                  </p>
                  <ul>
                    <li>Jira</li>
                    <li>Trello</li>
                    <li>Bugsnag</li>
                    <li>Appcenter</li>
                    <li>Selenium</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section projects is-medium is-white has-text-centered">
        <div className="container is-narrow">
          <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
            Our Recent Work
          </h1>
          <h2 className="subtitle is-size-5-desktop">
            Here are a few projects we&apos;ve worked on recently. Want to see
            more?
            <a href="mailto:contact@vndevs.com"> Email us</a>.
          </h2>
          <div className="project-grid">
            <div className="columns is-multiline is-mobile">
              <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                <figure className="image is-3by2">
                  <img
                    alt="x"
                    className="project-thumb"
                    src="https://uploads-ssl.webflow.com/5d27f21b207f92325352de64/5e8b159933bd3026f1906c65_Group%20316.png"
                    style={{ background: "#fbf1f0" }}
                  />
                  <figcaption>
                    <h1 className="title is-size-5 is-size-4-widescreen">
                      Moving people with mobility technology
                    </h1>
                    <a
                      className="button is-primary is-outlined is-rounded"
                      href="https://www.swatmobility.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Visit Website</span>
                      <span className="icon">
                        <svg
                          className="svg-inline--fa fa-angle-right fa-w-8"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="angle-right"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </figcaption>
                  <div className="overlay"></div>
                </figure>
              </div>
              <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                <figure className="image is-3by2">
                  <img
                    alt="x"
                    className="project-thumb"
                    src="https://www.reviver.com/wp-content/uploads/2020/08/Home-B-Rplate-Garage-Dark-1920x1080-2.jpg"
                  />
                  <figcaption>
                    <h1 className="title is-size-5 is-size-4-widescreen">
                      Slim, sleek and extremely cool, our newest digital license
                      plate.
                    </h1>
                    <a
                      className="button is-primary is-outlined is-rounded"
                      href="https://www.reviver.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Visit Website</span>
                      <span className="icon">
                        <svg
                          className="svg-inline--fa fa-angle-right fa-w-8"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="angle-right"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </figcaption>
                  <div className="overlay"></div>
                </figure>
              </div>
              <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                <figure className="image is-3by2">
                  <img
                    alt="x"
                    className="project-thumb"
                    src="img/projects/chronicled.png"
                  />
                  <figcaption>
                    <h1 className="title is-size-5 is-size-4-widescreen">
                      Blockchain pioneers bringing transparency, trust, and
                      security to supply.
                    </h1>
                    <a
                      className="button is-primary is-outlined is-rounded"
                      href="https://www.chronicled.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Visit Website</span>
                      <span className="icon">
                        <svg
                          className="svg-inline--fa fa-angle-right fa-w-8"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="angle-right"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </figcaption>
                  <div className="overlay"></div>
                </figure>
              </div>
            </div>
          </div>
          <div className="columns is-centered"></div>
        </div>
      </section>
      {/* <section className="section clients is-medium is-white has-text-centered has-border-top">
        <div className="container is-narrow">
          <div className="columns is-centered">
            <div className="column is-half">
              <h1 className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile">
                I&apos;m proud to have collaborated with some awesome companies:
              </h1>
            </div>
          </div>
          <div className="client-grid">
            <div className="columns is-multiline is-mobile">
              <div className="column is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1">
                  <img
                    alt="x"
                    className="client-logo"
                    src="img/logos/briteweb.svg"
                  />
                </figure>
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1">
                  <img
                    alt="x"
                    className="client-logo"
                    src="img/logos/goodkind.svg"
                  />
                </figure>
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1">
                  <img
                    alt="x"
                    className="client-logo"
                    src="img/logos/redstamp.svg"
                  />
                </figure>
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1">
                  <img
                    alt="x"
                    className="client-logo"
                    src="img/logos/domain7.svg"
                  />
                </figure>
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1">
                  <img
                    alt="x"
                    className="client-logo"
                    src="img/logos/designlab.png"
                  />
                </figure>
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1">
                  <img
                    alt="x"
                    className="client-logo"
                    src="img/logos/chronicled.svg"
                  />
                </figure>
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1">
                  <img
                    alt="x"
                    className="client-logo"
                    src="img/logos/bldrs.png"
                  />
                </figure>
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1">
                  <img
                    alt="x"
                    className="client-logo"
                    src="img/logos/serpmetrics.svg"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="section is-medium is-primary has-text-centered is-long-ish">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
                Our Startup Projects
              </h1>
              <h2 className="subtitle is-size-5-desktop">
                We&apos;re a bit of a digital product junky. Over the years,
                we&apos;ve used hundreds of web and mobile apps in different
                industries and verticals. Eventually, we decided that it would
                be a fun challenge to try designing and building our own.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section startups has-text-centered">
        <div className="container is-narrow">
          <div className="startup-grid">
            <div className="columns is-multiline level">
              <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                <div className="box">
                  <img alt="x" className="logo" src="img/logos/kybercore.svg" />
                  <p>
                    Next level plug and play chassis systems for custom
                    do-it-yourself lightsaber builds.
                  </p>
                  <a
                    className="link has-text-primary button"
                    style={{ border: 'none', padding: 0, height: 27 }}
                    disabled=""
                  >
                    <span className="icon">
                      <svg
                        className="svg-inline--fa fa-tools fa-w-16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="tools"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M502.6 389.5L378.2 265c-15.6-15.6-36.1-23.4-56.6-23.4-15.4 0-30.8 4.4-44.1 13.3L192 169.4V96L64 0 0 64l96 128h73.4l85.5 85.5c-20.6 31.1-17.2 73.3 10.2 100.7l124.5 124.5c6.2 6.2 14.4 9.4 22.6 9.4 8.2 0 16.4-3.1 22.6-9.4l67.9-67.9c12.4-12.6 12.4-32.8-.1-45.3zM160 158.1v1.9h-48L42.3 67 67 42.3l93 69.7v46.1zM412.1 480L287.7 355.5c-9.1-9.1-14.1-21.1-14.1-33.9 0-12.8 5-24.9 14.1-33.9 9.1-9.1 21.1-14.1 33.9-14.1 12.8 0 24.9 5 33.9 14.1L480 412.1 412.1 480zM64 432c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zM276.8 66.9C299.5 44.2 329.4 32 360.6 32c6.9 0 13.8.6 20.7 1.8L312 103.2l13.8 83 83.1 13.8 69.3-69.3c6.7 38.2-5.3 76.8-33.1 104.5-8.9 8.9-19.1 16-30 21.5l23.6 23.6c10.4-6.2 20.2-13.6 29-22.5 37.8-37.8 52.7-91.4 39.7-143.3-2.3-9.5-9.7-17-19.1-19.6-9.5-2.6-19.7 0-26.7 7l-63.9 63.9-44.2-7.4-7.4-44.2L410 50.3c6.9-6.9 9.6-17.1 7-26.5-2.6-9.5-10.2-16.8-19.7-19.2C345.6-8.3 292 6.5 254.1 44.3c-12.9 12.9-22.9 27.9-30.1 44v67.8l22.1 22.1c-9.6-40.4 1.6-82.2 30.7-111.3zM107 467.1c-16.6 16.6-45.6 16.6-62.2 0-17.1-17.1-17.1-45.1 0-62.2l146.1-146.1-22.6-22.6L22.2 382.3c-29.6 29.6-29.6 77.8 0 107.5C36.5 504.1 55.6 512 75.9 512c20.3 0 39.4-7.9 53.7-22.3L231.4 388c-6.7-9.2-11.8-19.3-15.5-29.8L107 467.1z"
                        ></path>
                      </svg>
                    </span>
                    <span>In development</span>
                  </a>
                </div>
              </div>
              <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                <div className="box">
                  <img alt="x" className="logo" src="img/logos/houston.svg" />
                  <p>
                    Simple feedback and engagement tools for teams that want to
                    build and ship winning products.
                  </p>
                  <a
                    className="link has-text-primary button"
                    style={{ border: 'none', padding: 0, height: 27 }}
                    disabled=""
                  >
                    <span className="icon">
                      <svg
                        className="svg-inline--fa fa-tools fa-w-16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="tools"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M502.6 389.5L378.2 265c-15.6-15.6-36.1-23.4-56.6-23.4-15.4 0-30.8 4.4-44.1 13.3L192 169.4V96L64 0 0 64l96 128h73.4l85.5 85.5c-20.6 31.1-17.2 73.3 10.2 100.7l124.5 124.5c6.2 6.2 14.4 9.4 22.6 9.4 8.2 0 16.4-3.1 22.6-9.4l67.9-67.9c12.4-12.6 12.4-32.8-.1-45.3zM160 158.1v1.9h-48L42.3 67 67 42.3l93 69.7v46.1zM412.1 480L287.7 355.5c-9.1-9.1-14.1-21.1-14.1-33.9 0-12.8 5-24.9 14.1-33.9 9.1-9.1 21.1-14.1 33.9-14.1 12.8 0 24.9 5 33.9 14.1L480 412.1 412.1 480zM64 432c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zM276.8 66.9C299.5 44.2 329.4 32 360.6 32c6.9 0 13.8.6 20.7 1.8L312 103.2l13.8 83 83.1 13.8 69.3-69.3c6.7 38.2-5.3 76.8-33.1 104.5-8.9 8.9-19.1 16-30 21.5l23.6 23.6c10.4-6.2 20.2-13.6 29-22.5 37.8-37.8 52.7-91.4 39.7-143.3-2.3-9.5-9.7-17-19.1-19.6-9.5-2.6-19.7 0-26.7 7l-63.9 63.9-44.2-7.4-7.4-44.2L410 50.3c6.9-6.9 9.6-17.1 7-26.5-2.6-9.5-10.2-16.8-19.7-19.2C345.6-8.3 292 6.5 254.1 44.3c-12.9 12.9-22.9 27.9-30.1 44v67.8l22.1 22.1c-9.6-40.4 1.6-82.2 30.7-111.3zM107 467.1c-16.6 16.6-45.6 16.6-62.2 0-17.1-17.1-17.1-45.1 0-62.2l146.1-146.1-22.6-22.6L22.2 382.3c-29.6 29.6-29.6 77.8 0 107.5C36.5 504.1 55.6 512 75.9 512c20.3 0 39.4-7.9 53.7-22.3L231.4 388c-6.7-9.2-11.8-19.3-15.5-29.8L107 467.1z"
                        ></path>
                      </svg>
                    </span>
                    <span>In development</span>
                  </a>
                </div>
              </div>
              <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                <div className="box">
                  <img alt="x" className="logo" src="img/logos/basin.svg" />
                  <p>
                    A powerful, easy-to-configure form backend for designers and
                    developers. No coding required.
                  </p>
                  <a
                    className="link has-text-primary"
                    href="https://usebasin.com"
                  >
                    www.usebasin.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="callout">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="title is-spaced">
                  Interested in collaborating or investing?
                </h1>
                <h2 className="subtitle is-size-5-desktop">
                  I’m always open to discussing product design work or
                  partnership opportunities.
                </h2>
                <a
                  className="button is-primary is-outlined is-rounded is-medium"
                  href="/startup-inquiry"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="section testimonials is-medium is-white has-text-centered has-border-top">
        <div className="container is-narrow">
          <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
            Core members
          </h1>
          <h2 className="subtitle is-size-5-desktop">
            Meet our best guys and see what they are doing
          </h2>
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <div className="testimonials-slider">
                <input id="carousel-1" type="radio" name="carousel" />
                <input id="carousel-2" type="radio" name="carousel" />
                <div className="carousel-slides">
                  <div className="carousel-inner">
                    <div className="carousel-item">
                      <div className="testimonial-block">
                        <img
                          alt="x"
                          className="avatar"
                          src="img/avatars/khanh.png"
                        />
                        <p className="quote">
                          “Versatile Front-end Developer with 5 years of
                          experience designing, developing, and managing complex
                          sites, apps and internal frameworks. Specializes in
                          Reactjs and responsive design. ”
                        </p>
                        <h1 className="title is-size-5">Khanh Nguyen</h1>
                        <h2 className="subtitle is-size-6">Front-end Lead</h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="testimonial-block">
                        <img
                          alt="x"
                          className="avatar"
                          src="img/avatars/long.png"
                        />
                        <p className="quote">
                          “Extensive experience in Design, Development, &
                          Application Maintainance|Adept at Product Development,
                          Technical Experimentation, Functional Design
                          Specifications, & Cloud Computing”
                        </p>
                        <h1 className="title is-size-5">Long Dinh</h1>
                        <h2 className="subtitle is-size-6">
                          Sr. Java developer
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-nav">
                  <label htmlFor="carousel-1"></label>
                  <label htmlFor="carousel-2"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section call-to-action is-primary has-text-centered">
        <div className="container is-narrow">
          <div className="box">
            <div className="columns level">
              <div className="column level-item">
                <h1 className="title">Start a project</h1>
              </div>
              <div className="column level-item">
                <p>
                  Interested in working together? We should queue up a chat.
                  We’ll buy the coffee.
                </p>
              </div>
              <div className="column level-item">
                <a
                  className="button is-primary is-outlined is-rounded is-medium"
                  href="/contact"
                >
                  Let&apos;s do this
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="section is-primary is-small has-text-centered">
        <div className="container is-narrow">
          <div className="social-icons">
            <p className="field">
              <a
                className="button is-medium"
                href="https://www.linkedin.com/company/vndevs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-small">
                  <svg
                    className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </span>
              </a>
              <a
                className="button is-medium"
                href="https://www.facebook.com/VietNamDevs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-small">
                  <svg
                    className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 96.124 96.123"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"
                    ></path>
                  </svg>
                </span>
              </a>
            </p>
          </div>
          <div className="copyright">© VNDEVS Pte. Ltd. 2020</div>
        </div>
      </footer>
      <script src="js/main-min.js"></script>
      <script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
      ></script>
      <script src="https://usebasin.com/f/363b98eca5af/ahoy.js"></script>
    </div>
  );
};

export default Home;
