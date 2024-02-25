import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameHeader from "../components/FrameHeader";
import ListItem from "../components/ListItem";
import "./Notification1.css";

const Notification1 = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  return (
    <div className="notification">
      <FrameHeader
        knowledgeOfVaccine="Verification Notification"
        navButtonPadding="0px var(--padding-12xs) 0px 0px"
        onNavButtonClick={onNavButtonClick}
      />
      <ListItem />
      <section className="footer4">
        <footer className="rectanglebg">
          <div className="footer5">
            <div className="bg2" />
            <div className="largerthan-container">
              <b className="largerthan2">Logo</b>
              <div className="i2">i</div>
            </div>
            <div className="form2">
              <div className="form-field2">
                <div className="secondary-button2">
                  <div className="secondary-button-text2">Subscribe</div>
                </div>
                <div className="input2" />
                <div className="your-email2">Your email</div>
              </div>
              <b className="subscribe-to-get2">
                Subscribe to get latest updates
              </b>
            </div>
            <div className="links2">
              <div className="our-team2">
                <b className="home2">Home</b>
                <div className="about-us3">About us</div>
                <div className="team2">Team</div>
                <div className="what-we-do2">What we do</div>
                <div className="contact2">Contact</div>
              </div>
              <div className="more4">
                <b className="more5">More</b>
                <div className="projects2">Projects</div>
                <div className="events2">Events</div>
                <div className="donate2">Donate</div>
                <div className="blog2">Blog</div>
              </div>
              <div className="connect4">
                <b className="connect5">{`Connect `}</b>
                <div className="facebook2">Facebook</div>
                <div className="instagram2">Instagram</div>
                <div className="twitter2">Twitter</div>
                <div className="linkdin2">{`Linkdin `}</div>
              </div>
            </div>
          </div>
        </footer>
        <img className="donatelink-icon" alt="" src="/2-10@2x.png" />
      </section>
    </div>
  );
};

export default Notification1;
