import "./Mentor.css";
import { mentorData } from "../../config.js";
import mail from "../../assets/images/mentor-gmail.svg";
import linkedin from "../../assets/images/mentor-linkedIn.svg";
import insta from "../../assets/images/mentor-instagram.svg";

const Mentor = () => {
  return (
    <div className="mentor">
      <h2 className="mentor-heading">Our Mentors</h2>
      <div className="mentor-cards">
        {mentorData.map((mentor) => {
          return (
            <div key={mentor.id} className="mentor-card">
              <img src={mentor.profile} alt="" className="mentor-img" />
              <h3 className="mentor-name">{mentor.name}</h3>
              <p className="mentor-place">{mentor.place}</p>
              <p className="mentor-para">{mentor.para}</p>
              <div className="mentor-socials">
                <a href={mentor.links.mail}>
                  <img src={mail} alt="" className="mentor-links" />
                </a>
                <a href={mentor.links.linkedin}>
                  <img src={linkedin} alt="" className="mentor-links" />
                </a>
                <a href={mentor.links.insta}>
                  <img src={insta} alt="" className="mentor-links" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mentor;
