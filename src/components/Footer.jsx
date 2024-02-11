import "./Footer.css";
import play from "../assets/images/play-store.svg";
import apple from "../assets/images/apple.svg";
import insta from "../assets/images/insta.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import x from "../assets/images/x.svg";
import linkedin from "../assets/images/linkedin.svg";
import location from "../assets/images/Location.png";
import gmail from "../assets/images/Gmail.svg";
import call from "../assets/images/call.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="top-footer">
        <div className="left">
          <h2 className="headings">HealthSync Hub</h2>
          <div>
            <h3 className="headings">Get the app</h3>
            <div className="apk">
              <abbr title="Download Now !">
                <button>
                  <div>
                    <img src={play} alt="" className="play-store-img" />
                  </div>
                  <div>
                    <p className="apk-p">
                      Get It On <br />
                      <span>Google Play</span>
                    </p>
                  </div>
                </button>
              </abbr>
              <abbr title="Download Now !">
                <button>
                  <div>
                    <img src={apple} alt="" className="apple-store-img" />
                  </div>
                  <div>
                    <p className="apk-p">
                      Download On The <br />
                      <span>App Store</span>
                    </p>
                  </div>
                </button>
              </abbr>
            </div>
          </div>
          <div>
            <h3 className="headings">Follow us on</h3>
            <div className="icons">
              <abbr title="instagram" className="first-icon">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={insta} alt="instagram icon" />
                </a>
              </abbr>
              <abbr title="whatsapp" className="second-icon">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={whatsapp} alt="whatsapp icon" />
                </a>
              </abbr>
              <abbr title="twitter" className="third-icon">
                <a href="#">
                  <img src={x} alt="twitter icon" />
                </a>
              </abbr>
              <abbr title="linkedin" className="fourth-icon">
                <a href="#">
                  <img src={linkedin} alt="linkedin icon" />
                </a>
              </abbr>
            </div>
          </div>
        </div>
        <div className="links-section">
          <div className="Knowus">
            <h2>Know Us</h2>
            <ul>
              <li className="nav-item">
                <span>
                  <a href="/">Home</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/about">Enquiry</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/service">Services</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/hiring">Join Us</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="Services">
            <h2>Services</h2>
            <ul>
              <li>
                <span>
                  <a href="/services">Hospital Mapping</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/services">Customized Rooms</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/services">Instead Help Support</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/services">Instead Appointment Booking</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h2 className="about-h2">Contact Us</h2>
            <ul>
              <li>
                <img
                  className="contact-icon"
                  src={location}
                  alt="google map icon"
                />
                <span>
                  <p>
                    <a
                      href="#"
                      target="_blank"
                      className="add"
                      rel="noreferrer"
                    >
                      XYZ
                      <br />
                      Ghaziabad Delhi NCR 201206
                    </a>
                  </p>
                </span>
              </li>
              <li>
                <img className="contact-icon" src={gmail} alt="gmail icon" />
                <span>
                  <p>
                    <a href="mailto:Visheshmaurya14@gmail.com">
                      Visheshmaurya14@gmail.com
                    </a>
                    {/* <br /> */}
                    {/* <a href="mailto:info@ambuvians.in ">info@ambuvians.in</a> */}
                  </p>
                </span>
              </li>
              <li>
                <img className="contact-icon" src={call} alt="ringtone icon" />
                <span>
                  <p>
                    <a href="tel:+7505853812">93466574XX</a>
                    <br />
                    <a href="tel:+8630729931">963072XXXX</a>
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <h6>&#169; HealthSync Hub Pvt. Ltd.</h6>
      </div>
    </div>
  );
}

export default Footer;
