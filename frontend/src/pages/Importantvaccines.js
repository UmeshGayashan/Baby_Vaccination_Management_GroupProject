import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameHeader from "../components/FrameHeader";
import ListItem from "../components/ListItem";
import "./pageCss/Vaccines.css";
import Footer from "../components/Footer";

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
      <Footer />
    </div>
  );
};

export default IVaccines;
