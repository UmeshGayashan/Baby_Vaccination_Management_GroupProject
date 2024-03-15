import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameHeader from "../components/FrameHeader";
import ListItem from "../components/ListItem";
import "./Vaccines.css";
import Footer2 from "../components/Footer2";

const IVaccines = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  return (
    <div className="vaccines">
      {/* navbar and header */}
      <FrameHeader
        knowledgeOfVaccine="Knowledge Of Vaccine"
        onNavButtonClick={onNavButtonClick}
      />
      {/* dashboard and vaccine details */}
      <ListItem />
      <Footer2/>
    </div>
  );
};

export default IVaccines;
