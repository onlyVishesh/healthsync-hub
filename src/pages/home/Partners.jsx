import "./Partners.css";
import teific from "../../assets/images/teific.png";
import kiet from "../../assets/images/kiet.png";
import club from "../../assets/images/club.png";
import school from "../../assets/images/school.png";

const Partners = () => {
  return (
    <div className="partners">
      <h2 className="partners-heading">Our Partners</h2>
      <div className="partners-logos">
        <img src={teific} alt="teific" className="partners-logo" />
        <img src={kiet} alt="kiet" className="partners-logo" />
        <img src={club} alt="club" className="partners-logo" />
        <img src={school} alt="school" className="partners-logo" />
      </div>
    </div>
  );
};

export default Partners;
