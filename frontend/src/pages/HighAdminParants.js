import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StackCell from "../components/StackCell";
import CTAButton from "../components/CTAButton";
import FrameComponent8 from "../components/FrameComponent8";
// import SpecialNeedsDoctorsContainer from "../components/SpecialNeedsDoctorsContainer";
import Footer4 from "../components/Footer4";
import "./HighAdminParants.css";

const HighAdminParants = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/add-child");
  }, [navigate]);

  const onNavButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/add-perant");
  }, [navigate]);

  return (
    <div className="high-admin-parants">
      <section className="body-frame">
        <StackCell
          cTABackgroundPadding="0px var(--padding-12xs) 0px 0px"
          buttonPadding="var(--padding-3xs) var(--padding-35xl) var(--padding-4xs) var(--padding-34xl)"
          maskedIconWidth="unset"
          maskedIconFlex="1"
          onNavButtonClick={onNavButtonClick}
          onNavButton1Click={onNavButton1Click}
          onButtonContainerClick={onButtonContainerClick}
        />
        <CTAButton />
        <FrameComponent8 />
      </section>
      {/* <SpecialNeedsDoctorsContainer /> */}
      <Footer4 />
    </div>
  );
};

export default HighAdminParants;
