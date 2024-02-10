import "./Experience.css";
import experienceImg from "../../assets/images/experience.svg";
import check from "../../assets/images/check.svg";

const Experience = () => {
  return (
    <div className="experience">
      <h2 className="experience-heading">What Sets HealthSync Hub Apart</h2>
      <div className="exp">
        <div className="experience-text">
          <h4>
            Experience the comprehensive platform for your healthcare needs,
            including:
          </h4>
          <div className="experiences-points">
            <div className="experience-points">
              <ul>
                <li>
                  <img src={check} alt="tick" />
                  <p className="experience-point">24/7 patient support</p>
                </li>
                <li>
                  <img src={check} alt="" />
                  <p className="experience-point">
                    Customized and Reliable Hospital Service{" "}
                  </p>
                </li>
                <li>
                  <img src={check} alt="" />
                  <p className="experience-point">Book Hospital on one tap</p>
                </li>
              </ul>
              <button className="explore exp-btn">Explore</button>
            </div>
            <div className="experience-points">
              <ul>
                <li>
                  <img src={check} alt="" />
                  <p className="experience-point">View Hospital At Home</p>
                </li>
                <li>
                  <img src={check} alt="" />
                  <p className="experience-point">
                    Floor Wise View
                  </p>
                </li>
                <li>
                  <img src={check} alt="" />
                  <p className="experience-point">
                    Get one tap Detail of Hospital
                  </p>
                </li>
              </ul>
              <button className="download exp-btn">Download the App</button>
            </div>
          </div>
        </div>
        <div className="experience-img">
          <img src={experienceImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
