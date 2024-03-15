import ChildFrame from "../components/ChildFrame";
import "./Login.css";

const ForgotPassword = () => {
  return (
    <div className="login">
      <div className="login-frame">
        <div className="login-frame-child" />
        <img className="icon2" loading="eager" alt="" src="/55-1@2x.png" />
      </div>
      <div className="login-inner">
        <div className="title-text-parent">
          <div className="title-text">

            <div className="welcome-to-babyvaxpro-parent" style={{ marginTop:'60px' }}>
              <div>  <img
                className="icon3-2"
                loading="eager"
                alt=""
                src="/2-101@2x.png"

              /></div>
              <div className="welcome-to-babyvaxpro" style={{ marginleft: '-10px', marginTop:'60px' }}>Recovery Password</div>
            </div>
          </div>
          {/* Input Fields */}
          < ChildFrame />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
