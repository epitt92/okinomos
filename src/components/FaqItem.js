import * as PropTypes from "prop-types";

const FaqItem = (props) => {
  const { index , title, content } = props;
  const LoadingStyle = index%2===0 ? { left: "60px" } : { right: "60px" }
  const total = 2*3.14*30;
  const percentage = (index-1)*20
  const start = total*(100-percentage)/100.0;
  return (
    <div className="accordion-item text-start">
      <div className="accordion-header">
        <a className="accordion-button collapsed btn p-ftitle" data-bs-toggle="collapse" href={`#collapse${index}`}>
          {title}
        </a>
      </div>
      <div id={`collapse${index}`} className="collapse content" data-bs-parent="#accordion">
        <div className="card-body p-desc">
          {content}
        </div>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default FaqItem;
