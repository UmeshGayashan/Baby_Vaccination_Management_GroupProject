import ChildFrame from "../components/ChildFrame";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="forgot-password">
      <div className="parent-frame">
        <div className="parent-frame-child" />
        <img
          className="child-frame-icon"
          loading="eager"
          alt=""
          src="/55-1@2x.png"
        />
      </div>
      <div className="child-frame1">
        <ChildFrame />
      </div>
    </div>
  );
};

export default ForgotPassword;
