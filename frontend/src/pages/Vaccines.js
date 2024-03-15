import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameHeader from "../components/FrameHeader";
import ListItem from "../components/ListItem";
import "./Vaccines.css";
import Footer2 from "../components/Footer2";
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
      <Footer2/>
    </div>
  );
};

export default Vaccines;
