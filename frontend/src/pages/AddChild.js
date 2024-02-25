import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HorizontalSpacing from "../components/HorizontalSpacing";
import HomeLink from "../components/HomeLink";
import FacebookLink from "../components/FacebookLink";
import FrameComponent6 from "../components/FrameComponent6";
import Footer2 from "../components/Footer2";
import "./AddChild.css";

const AddChild = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/low-admin");
  }, [navigate]);

  const onButtons1Click = useCallback(() => {
    navigate("/low-admin");
  }, [navigate]);

  return (
    <div className="add-child">
      <HorizontalSpacing onNavButtonClick={onNavButtonClick} />
      <HomeLink addChild="Add Child" />
      <div className="text-inputs">
        <div className="input-text-label">Input Text Label</div>
        <div className="input-field">
          <div className="text">
            <div className="typing">Typing |</div>
            <img className="icon" alt="" />
          </div>
        </div>
        <div className="assistive-text">Assistive Text</div>
      </div>
      <section className="blog-link">
        <div className="linked-in-link" />
      </section>
      <FacebookLink
        icon="pending_I95:6387;1:38"
        icon1="pending_I124:8631;1:38"
        icon2="pending_I95:6386;1:38"
        icon3="pending_I124:8613;1:38"
        icon4="pending_I124:8622;1:38"
        icon5="pending_I104:5101;1:38"
        icon6="pending_I104:5110;1:38"
      />
      <FrameComponent6
        icon="pending_I114:5057;1:38"
        icon1="pending_I114:5177;1:38"
        icon2="pending_I114:5223;1:38"
        icon3="pending_I114:5269;1:38"
        icon4="pending_I114:5315;1:38"
        icon5="pending_I114:5361;1:38"
        icon6="pending_I114:5407;1:38"
        icon7="pending_I114:5453;1:38"
        icon8="pending_I114:5499;1:38"
        icon9="pending_I114:5545;1:38"
        icon10="pending_I114:5591;1:38"
        icon11="pending_I114:5637;1:38"
        onButtons1Click={onButtons1Click}
      />
      <Footer2 />
    </div>
  );
};

export default AddChild;
