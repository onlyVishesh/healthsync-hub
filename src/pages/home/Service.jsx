import "./Service.css";
import service1 from "../../assets/images/service1.svg";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.png";

const Service = () => {
  return (
    <div className="service">
      <h2 className="service-heading">Services</h2>
      <div className="service-content">
        <div className="service-points">
          <div className="service-point">
            <img src={service1} width="50px" height="auto" alt="service 1" />
            <p>Remote Hospital Research</p>
          </div>
          <div className="service-point">
            <img src={service2} width="50px" height="auto" alt="service 2" />
            <p>Virtual Hospital Visits</p>
          </div>
          <div className="service-point">
            <img src={service3} width="50px" height="auto" alt="service 3" />
            <p>Informed Decision Making Tools</p>
          </div>
          <div className="service-point">
            <img src={service4} width="50px" height="auto" alt="service 4" />
            <p>Accessibility Enhancements</p>
          </div>
        </div>
        <div className="service-text">
          <h4>
            Revolutionizing Healthcare Engagement: Seamless Solutions for
            Patients and Institutions
          </h4>
          <p>
            HealthSync Hub offers a revolutionary platform for individuals to
            interact with hospitals remotely. Whether you&#39;re seeking medical
            treatment, planning visits, or simply exploring healthcare
            facilities, HealthSync Hub provides a comprehensive solution,
            bridging the gap between patients and healthcare institutions. With
            features like remote hospital research, virtual visits, informed
            decision-making tools, and accessibility enhancements, HealthSync
            Hub empowers users to take control of their healthcare journey.
          </p>
          <div className="explore">
            <button className="explore-btn e">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
