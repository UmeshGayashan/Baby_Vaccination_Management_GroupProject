import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameHeader from "../components/FrameHeader";
import ListItem from "../components/ListItem";
import "./Vaccines.css";

const Vaccines = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  return (
    <div className="vaccines">
      <FrameHeader
        knowledgeOfVaccine="Knowledge of  Vaccine"
        onNavButtonClick={onNavButtonClick}
      />
      <ListItem />
      <section className="footer2">
        <footer className="footer-wrapper">
          <div className="footer3">
            <div className="bg1" />
            <div className="largerthan-group">
              <b className="largerthan1">Logo</b>
              <div className="i1">i</div>
            </div>
            <div className="form1">
              <div className="form-field1">
                <div className="secondary-button1">
                  <div className="secondary-button-text1">Subscribe</div>
                </div>
                <div className="input1" />
                <div className="your-email1">Your email</div>
              </div>
              <b className="subscribe-to-get1">
                Subscribe to get latest updates
              </b>
            </div>
            <div className="links1">
              <div className="our-team1">
                <b className="home1">Home</b>
                <div className="about-us2">About us</div>
                <div className="team1">Team</div>
                <div className="what-we-do1">What we do</div>
                <div className="contact1">Contact</div>
              </div>
              <div className="more2">
                <b className="more3">More</b>
                <div className="projects1">Projects</div>
                <div className="events1">Events</div>
                <div className="donate1">Donate</div>
                <div className="blog1">Blog</div>
              </div>
              <div className="connect2">
                <b className="connect3">{`Connect `}</b>
                <div className="facebook1">Facebook</div>
                <div className="instagram1">Instagram</div>
                <div className="twitter1">Twitter</div>
                <div className="linkdin1">{`Linkdin `}</div>
              </div>
            </div>
          </div>
        </footer>
        <img className="donate-link-icon" alt="" src="/2-10@2x.png" />
      </section>
    </div>
  );
};

export default Vaccines;
