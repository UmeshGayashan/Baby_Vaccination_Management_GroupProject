import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameHeader from "../components/FrameHeader";
import "./pageCss/Vaccines.css";
import Footer from "../components/Footer";
import ListItem2 from "../components/VaccineList";

const Vaccines = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  return (
    <div className="vaccines">
      {/* navbar and header */}
      <FrameHeader
        knowledgeOfVaccine="BCG  Vaccine"
        onNavButtonClick={onNavButtonClick}
      />
      <ListItem2 />
      <Footer/>
    </div>
  );
};

export default Vaccines;
