import ImgGradient from "../assets/img/gradient.svg"

import Project from './Project'
import Roadmap from "./Roadmap";
import Team from "./Team";
import Video from "./Video";
import Faq from "./Faq";


const Section = (props) => {
  return (
    <section id="main-section">
      <img className="main-gradient" alt="Gradient" src={ ImgGradient } />
      <Project />
      <Roadmap />
      <Team />
      {/* <Video /> */}
      {/* <Faq /> */}
    </section>
  );
};

export default Section;
