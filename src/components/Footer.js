import * as PropTypes from "prop-types";

import logo from "../assets/img/LOGO.png"
import twitter from "../assets/img/header/vec1.png"
import vec2 from "../assets/img/header/vec2.png"
import vec3 from "../assets/img/header/vec3.png"
import vec4 from "../assets/img/header/vec4.png"
import twitterh from "../assets/img/header/vec1h.png"
import vec2h from "../assets/img/header/vec2h.png"
import vec3h from "../assets/img/header/vec3h.png"
import vec4h from "../assets/img/header/vec4h.png"

import '../assets/css/roadmap.css'

interface IHeaderProps {
  killSession: () => void;
  connected: boolean;
  address: string;
  chainId: number;
}

const Footer = () => {
  return (
    <footer className="footer section text-center bg-black">
      <div className="container">
        <div className="row main-footer">
          <div className="col-md-4 col-sm-4">
            <div className="social-icons">
              <a className="p-2" target="_blank" href="https://instagram.com/meta3oys"> <img alt="twitter" src={twitter} /><img alt="twitter" src={twitterh} /> </a>
              <a className="p-2" target="_blank" href="https://twitter.com/meta3oys"> <img alt="twitter" src={vec2} /><img alt="twitter" src={vec2h} /> </a>
              <a className="p-2" target="_blank" href="https://discord.gg/meta3oys"> <img alt="twitter" src={vec4} /><img alt="twitter" src={vec4h} /> </a>
              <a className="p-2 disabled" target="_blank" href="https://opensea.io/collection/meta3oys"> <img alt="twitter" src={vec3} /><img alt="twitter" src={vec3h} /> </a>			  
            </div>
          </div>
          <div className="col-md-4 col-sm-5">
            <div className="logo text-center">
              {/* <a href="https://inovatim.devop360.com/meta-boys/index.html"> <img src={logo} /> </a> */}
            </div>
          </div>
          <div className="col-md-4 col-sm-3">
            <ul className="menu">
              <li><a href="#the-projects">mint</a></li>
              <li><a href="#the-roadmap">roadmap</a></li>
              <li><a href="#the-team">team</a></li>
              <li><a href="#the-faq">faq</a></li>
            </ul>
          </div>
        </div>
        <div className="row p-m-5 p-3">
          <hr className="col-md-7 m-auto"/>
          <p className="copyright-text pt-4">
            © 2022 Okimonos | All Rights Reserved
          </p>
        </div>
      </div>  
    </footer>
  );
};

// Header.propTypes = {
//   killSession: PropTypes.func.isRequired,
//   address: PropTypes.string,
// };

export default Footer;
