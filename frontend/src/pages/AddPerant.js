import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";
import MothersNameField from "../components/MothersNameField";
import AddParentFrame from "../components/AddParentFrame";
import UploadParentImage from "../components/UploadParentImage";
import "./AddPerant.css";
import HomeLink from "../components/HomeLink";
import Footer2 from "../components/Footer2";

const AddPerant = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/low-admin-parants");
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
      <HomeLink addChild="Add Parant" />

      <section className="blog-link">
        <div className="linked-in-link" />
      </section>

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
      <Footer2/>

    </div>
  );
};

export default AddPerant;
