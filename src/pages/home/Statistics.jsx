import "./Statistics.css";
import usersIcon from "../../assets/images/userIcon.png";
import timeSavedIcon from "../../assets/images/time-saved-icon.png";
import informedDecisionsIcon from "../../assets/images/informed-decisions-icon.png";
import accessibilityIcon from "../../assets/images/accessibility-icon.png";
import partnershipsIcon from "../../assets/images/partnerships-icon.png";

const Statistics = () => {
  return (
    <div className="statistic">
      <h2 className="statistics-heading">Statistics</h2>
      <div className="stats-details">
        <div className="stats-detail">
          <img src={usersIcon} width="100px" alt="Users Served" />
          <h4>100,000+</h4>
          <p>Users Served</p>
        </div>
        <div className="stats-detail">
          <img
            src={timeSavedIcon}
            width="100px"
            height="auto"
            alt="Time Saved"
          />
          <h4>500,000+ hours</h4>
          <p>Time Saved</p>
        </div>
        <div className="stats-detail">
          <img
            src={informedDecisionsIcon}
            width="100px"
            height="auto"
            alt="Informed Decisions"
          />
          <h4>85%</h4>
          <p>Informed Decisions Rate</p>
        </div>
        <div className="stats-detail">
          <img
            src={accessibilityIcon}
            width="100px"
            height="auto"
            alt="Accessibility Boost"
          />
          <h4>30% increase</h4>
          <p>Accessibility Boost</p>
        </div>
        <div className="stats-detail">
          <img
            src={partnershipsIcon}
            width="120px"
            height="auto"
            alt="Hospital Partnerships"
          />
          <h4>200+</h4>
          <p>Hospital Partnerships</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
