import { useMemo } from "react";
import "./comCss/FrameHeader.css";
import Navbar from "./Navbar";

const FrameHeader = ({
  knowledgeOfVaccine,
  navButtonPadding,
  onNavButtonClick,
}) => {
  const spacingVerticalStyle = useMemo(() => {
    return {
      padding: navButtonPadding,
    };
  }, [navButtonPadding]);

  return (
    <section className="frame-header1">
      {/* navbar */}
     <Navbar/>
{/* header */}
      <div className="header3">
        <div className="bg15" />
        <h1 className="knowledge-of-vaccine2">{knowledgeOfVaccine}</h1>
        <div className="frame-footer">
          <img
            className="custom-actions-slot1"
            loading="eager"
            alt=""
            src="/2-101@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameHeader;
