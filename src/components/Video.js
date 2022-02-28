import * as PropTypes from "prop-types";
import ImgVideo from "../assets/img/section/metaboys.png"
import Discord from '../assets/img/section/discord.png'
import DiscordHover from '../assets/img/section/discord_h.png'


import '../assets/css/team.css'

const Video = () => {
  return (
    <section className="product-category section" id="the-video">
      <img alt="Video" src={ImgVideo}/>
      <div className="discord-logo">
        <div>
        <a target="_blank" href="https://discord.gg/meta3oys"><img src={Discord}/><img src={DiscordHover}/></a></div>
      </div>
    </section>
  );
};

export default Video;
