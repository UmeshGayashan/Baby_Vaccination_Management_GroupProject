import { useMemo } from "react";
import "./AddParentFrame.css";

const AddParentFrame = ({
  email,
  emailPlaceholder,
  propPadding,
  propTextDecoration,
  propWidth,
}) => {
  const addParentFrameStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const emailStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const email1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="add-parent-frame1" style={addParentFrameStyle}>
      <div className="email-input-field">
        <div className="email1" style={emailStyle}>
          {email}
        </div>
        <div className="input-field64">
          <input
            className="email2"
            placeholder={emailPlaceholder}
            type="text"
            style={email1Style}
          />
        </div>
      </div>
    </div>
  );
};

export default AddParentFrame;
