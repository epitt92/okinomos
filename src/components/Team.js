import * as PropTypes from "prop-types";

import '../assets/css/team.css'
import TeamMate from "./Teammate";
import alexei from '../assets/img/project/alexei.jpg'
import david from '../assets/img/project/david.jpg'
import hanehi from '../assets/img/project/hanehi.jpg'
import johnny from '../assets/img/project/johnny.jpg'
import jul from '../assets/img/project/jul.jpg'
import nick from '../assets/img/project/nick.jpg'
import sergey from '../assets/img/project/sergey.jpg'
import tarz from '../assets/img/project/tarz.jpg'

const Team = () => {
  const teamamtes = [
    { name: 'Taro', position: '', 
      pic: alexei,
      description: "The Front Developer"},
      
    { name: 'Taro', position: '', 
    pic: alexei,
    description: "The Front Developer"},
    
    { name: 'Taro', position: '', 
      pic: alexei,
      description: "The Front Developer"},
      
    { name: 'Taro', position: '', 
    pic: alexei,
    description: "The Front Developer"},
    
    { name: 'Taro', position: '', 
      pic: alexei,
      description: "The Front Developer"},
    { name: 'Taro', position: '', 
      pic: alexei,
      description: "The Front Developer"},
      
    { name: 'Taro', position: '', 
    pic: alexei,
    description: "The Front Developer"},
    { name: 'Taro', position: '', 
      pic: alexei,
      description: "The Front Developer"}
  ]
	
  return (
    <section className="product-category section" id="the-team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
            <h1 className="HeadingNow p-heading"><span>TEAM</span></h1>
            </div>
          </div>
        </div>
        <div className="row p-desc">
          <p>We have a background in new technologies for over 20 years with several works to its credit on blockchain in 2015, 2016, 2019 and 2021. We generated a total of more than 9 figures in different fields.</p>
          <p>We are experts in network and digital marketing for more than 10 years.</p>
        </div>
        <div className="row">
          {teamamtes.map((mate, i) => <TeamMate key={i} index={i} name={mate.name} position={mate.position} desc={mate.description} pic={mate.pic} />)}
        </div>
      </div>
    </section>
  );
};

export default Team;
