import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container-fluid" id="about">
        <h2 className="fa-heading text-center about">ABOUT US</h2>
        <h6 className="sec-heading text-center mt-4">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem.
        </h6>
      </div>
      <div className="about-intro">
        <div className="row mt-4">
          <div className="col-lg-6 col-md-6 my-">
            <p className="text-decription mx-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
            <ul className="mx-4">
              <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li>Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul>
          </div>

          <div className="col-lg-6 col-md-6">
            <p className="info">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <button type="button" class="btn btn-outline-primary">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="container-happy">
        <div className="row text-center ">
          <div className="col-md-6 col-lg-3 happy">
            <div>
              <h1 className="numbers">65</h1>
              <p className="text-primary">Happy Clients</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 happy">
            <div>
              <h1 className="numbers">85</h1>
              <p className="text-primary">Projects</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 happy">
            <div>
              <h1 className="numbers">30</h1>
              <p className="text-primary">Years Of Experience</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 happy">
            <div>
              <h1 className="numbers">20</h1>
              <p className="text-primary">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
