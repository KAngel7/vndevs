import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Contact = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [from, setFrom] = useState("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
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
      <div
        className="is-form-page animate-fadeUp"
        style={{ minHeight: "calc(100vh - 310px)" }}
      >
        <section className="is-white has-text-centered">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-three-quarters">
                <img className="avatar" src="img/mf-avatar.svg" />
                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                  Thanks for taking the time to reach out. How can we help you
                  today?
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="is-white">
          <div className="container">
            <form
              id="invisible-recaptcha-form"
              accept-charset="UTF-8"
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                await axios.post("/api/sendEmail", {
                  from,
                  name,
                  body,
                });
                setFrom("");
                setName("");
                setBody("");
                setLoading(false);
                alert("Thank you for contacting us!");
              }}
            >
              <div className="columns is-centered">
                <div className="column is-half">
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control is-expanded">
                      <input
                        className="input is-large"
                        name="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control is-expanded">
                      <input
                        className="input is-large"
                        name="email"
                        type="email"
                        required
                        value={from}
                        onChange={(e) => setFrom(e.currentTarget.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns is-centered">
                <div className="column">
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control is-expanded">
                      <textarea
                        className="textarea is-large"
                        name="message"
                        rows={5}
                        required
                        value={body}
                        onChange={(e) => setBody(e.currentTarget.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="field is-hidden">
                    <label className="is-hidden"></label>
                    <div className="control is-expanded is-hidden">
                      <input
                        className="is-hidden"
                        name="bot_vortex"
                        type="hidden"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns is-centered">
                <div className="column is-one-third">
                  <div className="field">
                    <div className="control">
                      <div>
                        <div
                          className="grecaptcha-badge"
                          data-style="inline"
                          style={{
                            width: 256,
                            height: 60,
                            position: "fixed",
                            visibility: "hidden",
                            display: "block",
                            transition: "right 0.3s ease 0s",
                            bottom: 14,
                            right: -186,
                            borderRadius: 2,
                            overflow: "hidden",
                            boxShadow: "gray 0px 0px 5px",
                          }}
                        >
                          <div className="grecaptcha-logo">
                            <iframe
                              src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy&amp;co=aHR0cHM6Ly9tYXR0ZmFybGV5LmNhOjQ0Mw..&amp;hl=en&amp;v=4lbq4vBYAu25DMtzZ7GGbfAF&amp;size=invisible&amp;badge=inline&amp;cb=7wfjlv4ni8vz"
                              width="256"
                              height="60"
                              role="presentation"
                              name="a-t6ox85pibfv"
                              scrolling="no"
                              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                            ></iframe>
                          </div>
                          <div className="grecaptcha-error"></div>
                          <textarea
                            id="g-recaptcha-response"
                            name="g-recaptcha-response"
                            className="g-recaptcha-response"
                            style={{
                              width: 250,
                              height: 40,
                              border: "1px solid rgb(193, 193, 193)",
                              margin: "10px 25px",
                              padding: 0,
                              resize: "none",
                              display: "none",
                            }}
                          ></textarea>
                        </div>
                        <iframe
                          style={{
                            display: "none",
                          }}
                        ></iframe>
                      </div>
                      <button
                        className="button is-primary is-outlined is-medium is-fullwidth is-rounded g-recaptcha"
                        data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"
                        data-callback="onSubmit"
                        data-badge="inline"
                        type="submit"
                        disabled={loading}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
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
    </div>
  );
};

export default Contact;
