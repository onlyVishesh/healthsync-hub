import "./Feedback.css";
import { feedbackData } from "../../config.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Mentor = () => {
  return (
    <div className="feedback">
      <h2 className="feedback-heading">Feedbacks</h2>
      <div className="feedback-cards">
        {feedbackData.map((feedback) => {
          return (
            <div key={feedback.id} className="feedback-card">
              <img src={feedback.profile} alt="" className="feedback-imgs" />
              <p className="feedback-para">{feedback.para}</p>
              <div className="feedback-stars">
                {Array.from({ length: feedback.stars }, (_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: "#e77c40" }}
                  />
                ))}
                {Array.from({ length: 5 - feedback.stars }, (_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: "#ccc" }}
                  />
                ))}
              </div>
              <h3 className="feedback-name">{feedback.name}</h3>
              <p className="feedback-text">{feedback.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mentor;
