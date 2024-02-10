import { Link } from "react-router-dom";
import "./Title.css";
import titleImg from "../../assets/images/title.png";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";

const Title = () => {
  return (
    <div className="title">
      <div className="title-content">
        <h1 className="title-content-heading">
          HealthSync <span>Hub</span>
        </h1>
        <p className="title-content-para">
          &#34;HealthSync Hub revolutionizes the way individuals interact with
          hospitals, offering a seamless platform for exploring healthcare
          facilities remotely. Whether users seek to research hospitals for
          medical treatment, plan visits, or simply satisfy their curiosity,
          HealthSync Hub provides a comprehensive solution, bridging the gap
          between patients and healthcare institutions.&#34;
        </p>
        <div className="btns">
          <div className="social-btn">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
          <div className="explore">
            <button className="explore-btn">
              <Link to="/service">Explore</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="title-image">
        <img src={titleImg} alt="Hospital" />
      </div>
    </div>
  );
};

export default Title;
