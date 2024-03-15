import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import "./comCss/RectangleShape.css";

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
        <a  href="/v-details">
        <img className="custom-integration-switch" alt=""  />
        <img className="container-icon" alt="" src="/vector-11.svg" />
        </a>
      </div>
    </header>
  );
};

export default RectangleShape;
