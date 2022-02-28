import * as React from "react";
import ImgProject from "../assets/img/project/img.png"
import '../assets/css/project.css'

const Project = () => {
  return (
    <section className="product-category section" id="the-projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="title text-center">
                    <h1 className="HeadingNow p-heading"><span>THE STORY</span></h1>
                    </div>
                </div>
                
                <div className="col-7" style={{position: "relative"}}>
                    <div className="project-back">
                      {/* <img alt="Project" src={ImgProject}/> */}
                    </div>
                    <div className="p-desc e-ukraine category-box project-content">
                        <p>
                            This is a world where survival of the fittest has been taken to its logical extreme. In the not too distant future the land has been depleted of all it's major resources (water, meat, salt, cloth, gold etc.). Arguments over allocation of these resources have caused major disagreements between kingdoms and factions, causing bloody disorder amongst the people. The government created a fighting tournament for people and beasts alike in order to determine who is truly deserving of gaining these resources; this soon becomes a staple of their society. After years of this tournament going on, a section of society grows fed up with this, steals all the resources for themselves. To this day they are not only still on the run from the government but from other tournament participants.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

// Header.propTypes = {
//   killSession: PropTypes.func.isRequired,
//   address: PropTypes.string,
// };

export default Project;
