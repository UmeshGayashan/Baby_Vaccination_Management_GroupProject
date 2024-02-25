import FrameComponent7 from "../components/FrameComponent7";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-frame">
        <div className="login-frame-child" />
        <img className="icon2" loading="eager" alt="" src="/55-1@2x.png" />
      </div>
      <div className="login-inner">
        <div className="title-text-parent">
          <div className="title-text">
            <div className="welcome-to-babyvaxpro-parent">
              <div className="welcome-to-babyvaxpro">Welcome To BabyVaxPro</div>
              <img
                className="icon3"
                loading="eager"
                alt=""
                src="/2-101@2x.png"
              />
            </div>
          </div>
          <FrameComponent7 />
        </div>
      </div>
    </div>
  );
};

export default Login;
