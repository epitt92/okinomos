import * as PropTypes from "prop-types";

import ImgBoy1 from "../assets/img/section/set_1.png"
import ImgBoy2 from "../assets/img/section/set_2.png"
import ImgBoy3 from "../assets/img/section/set_3.png"

import '../assets/css/roadmap.css'
import RoadmapStep from "./RoadmapStep";

const Roadmap = () => {
  const roadmaps = [
    { title: "The Reward", content: "This first stage is centred around community growth and development. The tournament begins, each faction sends their chosen warriors to represent their village and try to gain the crucial resources needed for survival. Will you be ready to fight to the death against the others"},
    { title: "The Charity", content: "3-d model rendering of each piece airdropped to holders or access to whitelist of it. We will get another artist on board who specialises in 3-D rendering and every single piece will have a new 3-D artwork rendering to go with it and be airdropped to the holders which will be tradeable. "},
    { title: "The Knowledge ", content: `Functional  Figurines - Figurines will be created of each NFT and sent to each holder, this Figurine will have a QR code to access the pre game page and show the stat layout of their NFT and abilities for in-game.`},
    { title: "The Funding  ", content: `RPG game tournament- you play as your character, each clothes and pets have their own stats and abilities you play with win ethereum/ wager to enter the tournament to win it all. Stake to get a % of market share and revenue but earn much bigger if you play and win.  ( Marketplace percentage to tournament winnings to and game revenue). 
    As the game is developed so will the lore expansion which will be made into novels that go on sale around the world after getting published, hiring a large experienced team of writers and percentages of profits from the novels and lore will be allocated to the holders through staking and the players through tournaments. The best example of the lore structure and economy we plan on making is warhammer40k. 
    `}];
  return (
    <section className="product-category section" id="the-roadmap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
            <h1 className="HeadingNow p-heading"><span>ROADMAP</span></h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-11 col-12 mx-auto p-roadmaps">
            { roadmaps.map((roadmap, i) => <RoadmapStep key={i} index={i+1} title={roadmap['title']} content={roadmap['content']} />) }
          </div>
        </div>
      </div>
      {/* <img alt="Boy1" className="b-boy1" src={ImgBoy1}/>
      <img alt="Boy2" className="b-boy2" src={ImgBoy2}/>
      <img alt="Boy3" className="b-boy3" src={ImgBoy3}/> */}
    </section>
  );
};

export default Roadmap;
