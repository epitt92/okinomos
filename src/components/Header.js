import * as PropTypes from "prop-types";

import BannerBack from "../assets/img/header/background.jpg"
import logo from "../assets/img/LOGO.png"
import twitter from "../assets/img/header/vec1.png"
import vec2 from "../assets/img/header/vec2.png"
import vec3 from "../assets/img/header/vec3.png"
import vec4 from "../assets/img/header/vec4.png"
import twitterh from "../assets/img/header/vec1h.png"
import vec2h from "../assets/img/header/vec2h.png"
import vec3h from "../assets/img/header/vec3h.png"
import vec4h from "../assets/img/header/vec4h.png"

import ImgMenu from "../assets/img/header/Vector.svg"
import ImgTexture0 from "../assets/img/header/Texture.svg"
import ImgTexture1 from "../assets/img/header/1.svg"
import ImgTexture2 from "../assets/img/header/2.svg"

import '../assets/css/header.css'

const Header = (props ) => {
  const { connected, address, chainId, killSession, connect } = props;
  return (
    <section className="top-header">
      {/* <img className="top-back" alt="background" src={BannerBack} /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12 col-sm-4 social-icons">
            <a className="p-2" target="_blank" href="https://instagram.com/okimonos"> <img alt="twitter" src={twitter} /><img alt="twitter" src={twitterh} /> </a>
            <a className="p-2" target="_blank" href="https://twitter.com/okimonos"> <img alt="twitter" src={vec2} /><img alt="twitter" src={vec2h} /> </a>
            <a className="p-2" target="_blank" href="https://discord.gg/okimonos"> <img alt="twitter" src={vec4} /><img alt="twitter" src={vec4h} /> </a>
            <a className="p-2 disabled" target="_blank" href="https://opensea.io/collection/okimonos"> <img alt="twitter" src={vec3} /><img alt="twitter" src={vec3h} /> </a>			
          </div>
          <div className="col-md-4 col-xs-12 col-sm-4">
            <div className="logo text-center">
              {/* <img alt="logo" src={logo} /> */}
            </div>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-4">
            <div id="menu">
              <ul className="list-group">
                {/* <li className="list-group-item">
                  <span>{ address }</span><br/>
                  {connected?<a className="item active" onClick={killSession}>Disconnect</a>:
                  <a className="item active" onClick={connect}>Connect</a>
                  }
                  
                  
                </li> */}
                {/*<li className="list-group-item"><a className="item active" href="#the-projects">mint</a></li>*/}
                <li className="list-group-item"><a className="item">mint</a></li>
                <li className="list-group-item"><a className="item" href="#the-roadmap">roadmap</a></li>
                <li className="list-group-item"><a className="item" href="#the-team">team</a></li>
                <li className="list-group-item"><a className="item" href="#the-faq">faq</a></li>
              </ul>
            </div>
          </div>
          <div className="i-menu">
            <img src={ImgMenu} alt="Menu" data-bs-toggle="modal" data-bs-target="#myModal" />
            <div className="modal" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <img src={ImgTexture0} alt="texture" className="m-texture-0" />
                  <img src={ImgTexture1} alt="texture" className="m-texture-1" />
                  <img src={ImgTexture2} alt="texture" className="m-texture-2" />
                  <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                  </div>

                  <div className="modal-body">
                    <div className="m-logo">
                      <a href="#"> <img src={logo} /> </a>
                    </div>
                    <div>
                      <ul className="m-menu">
                        <li data-bs-dismiss="modal"><a href="#the-projects">mint</a></li>
                        <li data-bs-dismiss="modal"><a href="#the-roadmap">roadmap</a></li>
                        <li data-bs-dismiss="modal"><a href="#the-team">team</a></li>
                        <li data-bs-dismiss="modal"><a href="#the-faq">faq</a></li>
                      </ul>
                    </div>
                    <div className="m-social-icons">
                      <a className="p-2" target="_blank" href="https://instagram.com/okinomos"> <img alt="twitter" src={twitter} /><img alt="twitter" src={twitterh} /> </a>
                      <a className="p-2" target="_blank" href="https://twitter.com/okinomos"> <img alt="twitter" src={vec2} /><img alt="twitter" src={vec2h} /> </a>
                      <a className="p-2" target="_blank" href="https://opensea.io/collection/okinomos"> <img alt="twitter" src={vec3} /><img alt="twitter" src={vec3h} /> </a>
                      <a className="p-2 disabled" target="_blank" href="https://discord.gg/okinomos"> <img alt="twitter" src={vec4} /><img alt="twitter" src={vec4h} /> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row desc">
          <div className="col-10 text-left">
            <p className="p-header-title">
              Okimonos is an NFT project surrounded by lore and potential it is a collection made up of 7777 humble warriors who wish to win the tournament 
            </p>
            {/* <div className="header-mint-part d-left">
              <button className="header-mint btn" >mint</button>
              <span></span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  killSession: PropTypes.func.isRequired,
  address: PropTypes.string,
};

export default Header;
