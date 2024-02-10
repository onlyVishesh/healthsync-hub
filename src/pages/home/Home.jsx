import "./Home.css";
import Experience from "./Experience";
import Feedback from "./Feedback";
import FeedbackForm from "./FeedbackForm";
// import Mentor from "./Mentor";
// import Need from "./Need";
// import Partners from "./Partners";
import Service from "./Service";
import Statistics from "./Statistics";
import Title from "./Title";
import Vision from "./Vision";

const Home = () => {
  return (
    <div style={{ marginTop: "9vh" }}>
      <Title />
      <Statistics />
      <Vision />
      <Service />
      <Experience />
      {/* <Need /> */}
      <div className="backing">
        {/* <Mentor /> */}
        {/* <Partners /> */}
        <Feedback />
      </div>
      <FeedbackForm />
    </div>
  );
};

export default Home;
