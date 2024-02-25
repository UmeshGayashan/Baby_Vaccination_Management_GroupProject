import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HorizontalSpacing from "../components/HorizontalSpacing";
import HomeLink from "../components/HomeLink";
import FacebookLink from "../components/FacebookLink";
import FrameComponent6 from "../components/FrameComponent6";
import Footer2 from "../components/Footer2";
import "./UpdateChild.css";

const UpdateChild = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/low-admin");
  }, [navigate]);

  const onButtons1Click = useCallback(() => {
    navigate("/low-admin");
  }, [navigate]);

  return (
    <div className="update-child">
      <HorizontalSpacing onNavButtonClick={onNavButtonClick} />
      <HomeLink addChild="Update Child" />
      <div className="text-inputs1">
        <div className="input-text-label1">Input Text Label</div>
        <div className="input-field1">
          <div className="text1">
            <div className="typing1">Typing |</div>
            <img className="icon1" alt="" />
          </div>
        </div>
        <div className="assistive-text1">Assistive Text</div>
      </div>
      <section className="radio-button-instance">
        <div className="dot-shape" />
      </section>
      <FacebookLink
        icon="pending_I230:7623;1:38"
        icon1="pending_I230:7624;1:38"
        icon2="pending_I230:7625;1:38"
        icon3="pending_I230:7626;1:38"
        icon4="pending_I230:7627;1:38"
        icon5="pending_I230:7628;1:38"
        icon6="pending_I230:7629;1:38"
      />
      <FrameComponent6
        icon="pending_I230:7650;1:38"
        icon1="pending_I230:7657;1:38"
        icon2="pending_I230:7664;1:38"
        icon3="pending_I230:7671;1:38"
        icon4="pending_I230:7678;1:38"
        icon5="pending_I230:7685;1:38"
        icon6="pending_I230:7692;1:38"
        icon7="pending_I230:7699;1:38"
        icon8="pending_I230:7706;1:38"
        icon9="pending_I230:7713;1:38"
        icon10="pending_I230:7720;1:38"
        icon11="pending_I230:7727;1:38"
        onButtons1Click={onButtons1Click}
      />
      <Footer2 />
    </div>
  );
};

export default UpdateChild;
