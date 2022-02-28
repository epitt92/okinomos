import * as PropTypes from "prop-types";
import '../assets/css/roadmap.css'

const RoadmapStep = (props) => {
  const { index , title, content } = props;
  const percentage = (index-1)*20
  return (
    <div className={`roadmap-item rd-item-${index} ${index%2 === 0 ? 'mleft' : 'mright'}`}>
      <span className="p-roadmap-num index">{index}</span>
      <div>
        <div className={`c-loading loading-${index}`}>
        </div>
        <h1 className="p-title HeadingNow">{title}</h1>
        <p className="p-desc e-ukraine">{content} </p>
      </div>
    </div>
  );
};

RoadmapStep.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default RoadmapStep;
