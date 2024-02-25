import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";
import EmailField from "../components/EmailField";
import MothersNameField from "../components/MothersNameField";
import AddParentFrame from "../components/AddParentFrame";
import UploadParentImage from "../components/UploadParentImage";
import "./AddPerant.css";

const AddPerant = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/low-admin");
  }, [navigate]);

  return (
    <div className="add-perant">
      <GroupComponent
        rectangle1317="/rectangle-13171.svg"
        navButton="Back"
        showMedia
        aboutUsLinkWidth="1505px"
        aboutUsLinkPadding="var(--padding-lg) var(--padding-xl) var(--padding-base)"
        aboutUsLinkPosition="relative"
        aboutUsLinkTop="unset"
        aboutUsLinkOverflowX="auto"
        aboutUsLinkFlex="unset"
        groupDivLeft="-4px"
        groupDivRight="unset"
        groupDivOverflow="unset"
        babyVaxProWidth="266px"
        aboutUsWidth="497px"
        spacingVerticalAlignSelf="unset"
        spacingVerticalWidth="unset"
        navButtonWidth="246px"
        navButtonPadding="unset"
        propWidth="100px"
        propFlex="unset"
        propFlex1="1"
        propWidth1="unset"
        onNavButtonClick={onNavButtonClick}
      />
      <EmailField />
      <section className="mothers-name-field">
        <MothersNameField />
      </section>
      <AddParentFrame email="Email" emailPlaceholder="Email Address" />
      <AddParentFrame
        email="Phone"
        emailPlaceholder="Phone number"
        propPadding="0px var(--padding-xl) var(--padding-58xl)"
        propTextDecoration="unset"
        propWidth="118px"
      />
      <AddParentFrame
        email="User Name"
        emailPlaceholder="User Name"
        propPadding="0px var(--padding-xl) var(--padding-58xl)"
        propTextDecoration="underline"
        propWidth="88px"
      />
      <section className="password-input">
        <div className="line-separator">
          <div className="additional-info-frame">
            <div className="password">Password</div>
            <div className="input-field2">
              <input className="email" placeholder="Password" type="text" />
            </div>
          </div>
          <UploadParentImage />
        </div>
      </section>
      <section className="footer">
        <footer className="contact-link">
          <div className="footer1">
            <div className="bg" />
            <div className="largerthan-parent">
              <b className="largerthan">Logo</b>
              <div className="i">i</div>
            </div>
            <div className="form">
              <div className="form-field">
                <div className="secondary-button">
                  <div className="secondary-button-text">Subscribe</div>
                </div>
                <div className="input" />
                <div className="your-email">Your email</div>
              </div>
              <b className="subscribe-to-get">
                Subscribe to get latest updates
              </b>
            </div>
            <div className="links">
              <div className="our-team">
                <b className="home">Home</b>
                <div className="about-us1">About us</div>
                <div className="team">Team</div>
                <div className="what-we-do">What we do</div>
                <div className="contact">Contact</div>
              </div>
              <div className="projects-text">
                <div className="more">
                  <b className="more1">More</b>
                  <div className="projects">Projects</div>
                  <div className="events">Events</div>
                  <div className="donate">Donate</div>
                  <div className="blog">Blog</div>
                </div>
              </div>
              <div className="connect">
                <b className="connect1">{`Connect `}</b>
                <div className="facebook">Facebook</div>
                <div className="instagram">Instagram</div>
                <div className="twitter">Twitter</div>
                <div className="linkdin">{`Linkdin `}</div>
              </div>
            </div>
          </div>
        </footer>
        <img className="more-text-icon" alt="" src="/2-10@2x.png" />
      </section>
    </div>
  );
};

export default AddPerant;
