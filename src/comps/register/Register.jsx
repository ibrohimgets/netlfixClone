import React, { useRef, useState } from "react";
import "./register.scss";
import FAQ from "./FAQ";
import { AiOutlineRight } from "react-icons/ai";
import Footer from "./Footer";

const Register = ({ setNext }) => {
  const [email, setEmail] = useState(false);
  const emailRef = useRef();
  const passRef = useRef();

  const handleClick = () => {
    setEmail(emailRef.current.value);
    setEmail(true);
  };
  const handleFinish = () => {
    setNext(true);
  };

  return (
    <div className="main">
      <div className="register">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="container">
          <div className="right">
            <select id="language-select">
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
            </select>
            <button className="loginBtn">Sign In</button>
          </div>
          <div className="info">
            <h1>
              Unlimited movies, TV
              <br />
              <span>shows, and more.</span>
            </h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            {!email ? (
              <div className="input">
                <input
                  placeholder="Email JUST your NAME"
                  type="email"
                  ref={emailRef}
                />
                <button onClick={handleClick} className="registerBtn">
                  <span>Get Started</span> <AiOutlineRight />
                </button>
              </div>
            ) : (
              <form className="input">
                <input
                  placeholder="Any password is fine"
                  type="password"
                  ref={passRef}
                />
                <button onClick={handleFinish} className="registerBtn">
                  Start!
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="cont">
        <div className="first part">
          <div className="inf">
            <h1>Enjoy on your TV.</h1>

            <h3>
              Watch on Smart TVs, Playstation, Xbox, <br />
              Chromecast, Apple TV, Blu-ray players, and <br />
              more.
            </h3>
          </div>

          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="tv"
          />
          <div className="video_one">
            <video autoPlay muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="second part">
          <img
            className="img-2"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="tv"
          />
          <div className="footer_img">
            <div className="left_img">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt="pic"
              />
            </div>
            <div className="info">
              <h3>Stranger Things</h3>
              <span>Downloading...</span>
            </div>
            <div className="spinner">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt="spinner"
              />
            </div>
          </div>
          <div className="inf">
            <h1>
              Download your shows <br />
              to watch offline.
            </h1>
            <h3>
              Save your favorites easily and always have
              <br /> something to watch.
            </h3>
          </div>
        </div>
        <div className="third part">
          <div className="inf">
            <h1>Watch everywhere.</h1>
            <h3>
              Stream unlimited movies and TV shows on <br /> your phone, tablet,
              laptop, and TV without <br />
              paying more.
            </h3>
          </div>
          <div className="right">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt="pic"
            />
            <video autoPlay muted loop>
              <source
                type="video/mp4"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              />
            </video>
          </div>
        </div>
        <div className="fourth part">
          <div className="img">
            <img
              src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
              alt="kids"
            />
          </div>

          <div className="title">
            <h1>Create profiles for kids.</h1>
            <h3>
              Send kids on adventures with their favorite <br /> characters in a
              space made just for them— <br />
              free with your membership.
            </h3>
          </div>
        </div>
        <FAQ />
        <div className="footer">
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="input">
            <input placeholder="Email address" type="email" ref={emailRef} />
            <button onClick={handleClick} className="registerBtn">
              <span>Get Started</span> <AiOutlineRight />
            </button>
          </div>
        </div>
        <div className="last-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Register;
