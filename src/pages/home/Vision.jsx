import "./Vision.css";
import visionImg from "../../assets/images/visio-img.png";
const Vision = () => {
  return (
    <div className="vision">
      <h2 className="vision-heading">Our Vision</h2>
      <div className="vision-cards">
        <div className="vision-card">
          <div>
            <p className="vision-card-para">to provide</p>
            <h4 className="vision-card-heading">Floor Wise Description</h4>
          </div>

          <img className="vision-card-img" src={visionImg} alt="Vision 1" />
        </div>
        <div className="vision-card">
          <div>
            <p className="vision-card-para"> to</p>
            <h4 className="vision-card-heading">Bridge Gap in Healthcare</h4>
          </div>

          <img className="vision-card-img" src={visionImg} alt="Vision 2" />
        </div>
        <div className="vision-card">
          <div>
            <p className="vision-card-para"> to provide</p>
            <h4 className="vision-card-heading">Cost Chart</h4>
          </div>

          <img className="vision-card-img" src={visionImg} alt="Vision 3" />
        </div>
        <div className="vision-card">
          <div>
            <p className="vision-card-para"> to</p>
            <h4 className="vision-card-heading">Economical and Fastest </h4>
          </div>

          <img className="vision-card-img" src={visionImg} alt="Vision 4" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
