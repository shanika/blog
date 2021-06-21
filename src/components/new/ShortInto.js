import React from "react";
import profile from "../../img/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/fontawesome-free-brands";

const ShortInto = class extends React.Component {
  render() {
    return (
      <div className="short-intro">
        <div
          className="profile-pic"
          style={{ backgroundImage: `url(${profile})` }}
        />
        <div className="has-text-centered">
          <h1 className="title is-size-4">Welcome to RoshMade.</h1>
        </div>
        <div className="has-text-centered">
          The Tiny Canal Cottage® is a 1920's Craftsman-style house by the
          Venice Beach Canals in Southern California. After residing there for
          10 years, Sustainable Small Space Living Consultant Whitney Leigh
          Morris and her family (including her husband, 2 children, and 2 rescue
          pups) recently relocated.
        </div>
        <div className="social-icons">
          <div>
            <FontAwesomeIcon className="is-text" icon={faInstagram} size="1x" />
          </div>
          <div>
            <FontAwesomeIcon className="is-text" icon={faLinkedin} size="1x" />
          </div>
          <div>
            <FontAwesomeIcon className="is-text" icon={faEnvelope} size="1x" />
          </div>
        </div>
      </div>
    );
  }
};

export default ShortInto;
