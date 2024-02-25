import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import "./RectangleShape.css";

const RectangleShape = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="rectangle-shape1">
      <Navbar2
        media="Meet Doc"
        navButton="Log Out"
        onNavButtonClick={onNavButtonClick}
      />
      <div className="circle-notifications">
        <img className="custom-integration-switch" alt="" />
        <img className="container-icon" alt="" src="/vector-11.svg" />
      </div>
    </header>
  );
};

export default RectangleShape;
