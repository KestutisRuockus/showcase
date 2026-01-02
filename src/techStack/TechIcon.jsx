/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const IconComesFromFontAwesome = ({ tech }) => {
  return (
    <div className="flex flex-col items-center w-16">
      <i className={`${tech.icon} text-6xl`} style={{ color: tech.color }}></i>
      <span className="text-white mt-4">{tech.name}</span>
    </div>
  );
};

const IconComesFromUrl = ({ tech }) => {
  return (
    <div className="flex flex-col items-center w-16">
      <img src={tech.iconSrc} alt={tech.name} style={{ width: tech.width }} />
      <span className="text-white mt-4">{tech.name}</span>
    </div>
  );
};

const TechIcon = ({ tech }) => {
  return (
    <div>
      {tech.icon ? (
        <IconComesFromFontAwesome tech={tech} />
      ) : (
        <IconComesFromUrl tech={tech} />
      )}
    </div>
  );
};

TechIcon.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechIcon;
